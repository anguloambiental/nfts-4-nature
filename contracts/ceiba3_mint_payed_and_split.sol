// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract Ceiba3 is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 private _nextTokenId;
    uint256 public mintPrice = 0.001 ether;
    uint256 public constant sharePercentage = 30;
    address payable public beneficiary;
    mapping (string => uint8) existingUri;

    // contract constroctor needing two wallet addresses
    // You can convert address to payable address to do transfer to contract owner
    // address payable addr1 = payable(owner_address);
    // line 77 on_liner to create the payable object from contract owner
    constructor(
        address initialOwner,
        address payable _beneficiary)
    ERC721("Ceiba3", "Ceb3")
    Ownable(initialOwner) 
    {
        beneficiary = _beneficiary;
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
        override(ERC721, ERC721URIStorage)
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
        string memory uri,
        address payable extra
    ) public payable returns (uint256){
        require(existingUri[uri] != 1, 'NFT already minted!');
        require(msg.value == mintPrice, "Ether sent is not correct");

        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        uint256 beneficiaryShare = (msg.value * sharePercentage) / 100;
        extra.transfer(beneficiaryShare);
        beneficiary.transfer(beneficiaryShare);
        // create the payable object from contract owner
        payable(owner()).transfer(address(this).balance);

        return tokenId;
    }
}
