// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract Ceiba3 is ERC721, ERC721URIStorage, ERC721Royalty, Ownable {
    uint256 private _nextTokenId;
    uint8 public artistPercentage;
    uint public concervationPercentage;
    uint8 public noxPercentage;
    uint8 public fivePercentage;
    uint8 public tenPercentage;
    uint96 public royaltyFee;
    address payable conservation;
    address payable nox;
    address payable dori;
    address payable javi;
    address payable den;
    uint8 constant MAXMINTS = 25;

    struct nftControl {
        address artistWallet;
        uint8 timesMinted;
        uint256 price;
    }

    mapping(string => nftControl)  public nftInfo;

    constructor(
        address initialOwner,
        address payable _nox,
        address payable _javi,
        address payable _dori,
        address payable _den,
        address payable _conservation)
    ERC721("Ceiba3", "CB3")
    Ownable(initialOwner) 
    {
        nox = _nox;
        javi = _javi;
        dori = _dori;
        den = _den;
        conservation = _conservation;
        royaltyFee = 1000; // 10%
        artistPercentage = 30;
        concervationPercentage = 30;
        tenPercentage = 10;
        fivePercentage = 5;
        noxPercentage = 15;
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setTokenRoyalty(tokenId, nftInfo[uri].artistWallet, royaltyFee);
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
        string memory _uri,
        uint256 _price
    ) public onlyOwner {
        nftControl storage newMint = nftInfo[_uri];
        newMint.artistWallet = _artistWallet;
        newMint.timesMinted = 0;
        newMint.price = _price;
    }

    function viewPrice(
        string memory _uri
    ) public view returns (uint256){
        return nftInfo[_uri].price;
    }

    function viewArtist(
        string memory _uri
    ) public view returns (address){
        return nftInfo[_uri].artistWallet;
    }

    function viewTimesMinted(
        string memory _uri
    ) public view returns (uint8){
        return nftInfo[_uri].timesMinted;
    }

    function payToMint(
        address to,
        string memory uri
    ) public payable returns (uint256){
        require(nftInfo[uri].timesMinted < MAXMINTS, "Maximum NFT Minted");
        require(msg.value == nftInfo[uri].price, "Ether sent is not correct");

        uint256 tokenId = _nextTokenId++;
        nftInfo[uri].timesMinted += 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setTokenRoyalty(tokenId, nftInfo[uri].artistWallet, royaltyFee);

        uint256 conservationShare = (msg.value * concervationPercentage) / 100;
        uint256 artistShare = (msg.value * artistPercentage) / 100;
        uint256 noxShare = (msg.value * noxPercentage) / 100;
        uint256 firstShare = (msg.value * tenPercentage) / 100;
        uint256 secondShare = (msg.value * fivePercentage) / 100;
        payable(nftInfo[uri].artistWallet).transfer(artistShare);
        conservation.transfer(conservationShare);
        nox.transfer(noxShare);
        dori.transfer(firstShare);
        javi.transfer(firstShare);
        den.transfer(secondShare);
        // create the payable object from contract owner
        payable(owner()).transfer(address(this).balance);

        return tokenId;
    }
}