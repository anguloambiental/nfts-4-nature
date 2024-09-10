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
    uint8 public galleryPercentage;
    uint8 public conservationPercentage;
    uint96 public royaltyFee;
    address payable gallery;
    address payable artist;
    address payable conservation;
    address payable private javi;
    address payable private dori;
    address payable private den;
    uint8 constant MAXMINTS = 25;

    struct nftControl {
        uint8 timesMinted;
        uint256 mintPrice;
    }

    mapping(string => nftControl)  public nftInfo;

    constructor(
        address initialOwner,
        address payable _gallery,
        address payable _artist,
        address payable _conservation,
        address payable _javi,
        address payable _dori,
        address payable _den)
    ERC721("Ceiba3_Merida", "CB3")
    Ownable(initialOwner) 
    {
        gallery = _gallery;
        artist = _artist;
        conservation = _conservation;
        javi = _javi;
        dori = _dori;
        den = _den;
        royaltyFee = 1000;
        artistPercentage = 30;
        galleryPercentage = 15;
        conservationPercentage = 30;
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setTokenRoyalty(tokenId, artist, royaltyFee);
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

    function lastToken() public view returns (uint256){
        return _nextTokenId;
    }

    function addArt(
        string memory _uri,
        uint256 price
    ) public onlyOwner {
        nftControl storage newArt = nftInfo[_uri];
        newArt.timesMinted = 0;
        newArt.mintPrice = price;
    }

    function payToMint(
        address to,
        string memory uri
    ) public payable returns (uint256, address){
        require(nftInfo[uri].timesMinted < MAXMINTS, "Maximum NFT Minted");
        require(msg.value == nftInfo[uri].mintPrice, "Ether sent is not correct");

        uint256 tokenId = _nextTokenId++;
        nftInfo[uri].timesMinted += 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _setTokenRoyalty(tokenId, artist, royaltyFee);

        uint256 artistShare = (msg.value * artistPercentage) / 100;
        uint256 galleryShare = (msg.value * galleryPercentage) / 100;
        uint256 conservationShare = (msg.value * conservationPercentage) / 100;
        uint256 tenShare = (msg.value * 10) / 100;
        uint256 fiveShare = (msg.value * 5) / 100;
        artist.transfer(artistShare);
        gallery.transfer(galleryShare);
        conservation.transfer(conservationShare);
        dori.transfer(tenShare);
        javi.transfer(tenShare);
        den.transfer(fiveShare);

        payable(owner()).transfer(address(this).balance);

        return (tokenId, address(this));
    }
}