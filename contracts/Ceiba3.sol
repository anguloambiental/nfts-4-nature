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
    address payable artist;
    address payable nox;

    mapping (string => uint8) existingUri;

    constructor(
        address initialOwner,
        address payable _artist,
        address payable _nox)
    ERC721("Ceiba3", "CB3")
    Ownable(initialOwner) 
    {
        artist = _artist;
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

    // The following functions are overrides required by Solidity.

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

    // Adding a payable addres to be able to transfer to wallet sent from front (extra)
    // Also on the construction of contract added a payable address (benificiary)
    // You instanciate a payable object with a wallet address 
    // Payable object has transfer function only needing the balance
    // The addres of transfer function is the payable object instanciated address

    function payToMint(
        address to,
        string memory uri
    ) public payable returns (uint256){
        require(existingUri[uri] != 1, 'NFT already minted!');
        require(msg.value == mintPrice, "Ether sent is not correct");

        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setTokenRoyalty(tokenId, artist, royaltyFee);

        uint256 artistShare = (msg.value * artistPercentage) / 100;
        uint256 noxShare = (msg.value * noxPercentage) / 100;
        artist.transfer(artistShare);
        nox.transfer(noxShare);
        // create the payable object from contract owner
        payable(owner()).transfer(address(this).balance);

        return tokenId;
    }
}