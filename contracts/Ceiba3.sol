// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract Ceiba3 is ERC721, ERC721URIStorage, ERC721Royalty, Ownable {
    uint256 private _nextTokenId;
    uint256 public mintPrice;
    uint8 public artistPercentage;
    uint8 public noxPercentage;
    uint96 public royaltyFee;
    address payable nox;
    uint8 constant MAXMINTS = 3;

    struct nftControl {
        address artistWallet;
        uint8 timesMinted;
    }

    mapping(string => nftControl)  public nftInfo;

    constructor(
        address initialOwner,
        address payable _nox)
    ERC721("Ceiba3", "CB3")
    Ownable(initialOwner) 
    {
        nox = _nox;
        royaltyFee = 500; // 5%
        artistPercentage = 30;
        noxPercentage = 20;
        mintPrice = 1000000000000000; // 0.001 eth
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, ERC721Royalty)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function addToMap(
        address _artistWallet,
        string memory _uri
    ) public onlyOwner {
        nftControl storage newMint = nftInfo[_uri];
        newMint.artistWallet = _artistWallet;
        newMint.timesMinted = 0;
    }

    function payToMint(
        address to,
        string memory uri
    ) public payable returns (uint256){
        require(nftInfo[uri].timesMinted < MAXMINTS, "Maximum NFT Minted");
        require(msg.value == mintPrice, "Ether sent is not correct");

        uint256 tokenId = _nextTokenId++;
        nftInfo[uri].timesMinted += 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setTokenRoyalty(tokenId, nftInfo[uri].artistWallet, royaltyFee);

        uint256 artistShare = (msg.value * artistPercentage) / 100;
        uint256 noxShare = (msg.value * noxPercentage) / 100;
        payable(nftInfo[uri].artistWallet).transfer(artistShare);
        nox.transfer(noxShare);
        // create the payable object from contract owner
        payable(owner()).transfer(address(this).balance);

        return tokenId;
    }
}