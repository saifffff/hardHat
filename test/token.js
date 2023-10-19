const {expect} = require("chai"); // imports  the expect function from the Chai assertion library. The expect function is used to assert the expected behavior of your code.
const { ethers } = require("hardhat");

// mocha is a framework , chai is its library

// Tcon is alis of token
describe("Tcon",()=>{
    it("Deployment should transfer total supply of tokens to the owner",async ()=>{
        const [owner] = await ethers.getSigners();
        /* The brackets in the code const [owner] = await ethers.getSigners(); are used to destructure the result of the ethers.getSigners() function.
        The ethers.getSigners() function returns an array of signers. Destructuring allows you to extract the individual elements of the array into variables. */
        //console.log("Singner object : ",owner);
        const Token = await ethers.getContractFactory("Token");
        // getContractFactory gives us an instance of the contract
        const hardhatToken = await Token.deploy();
        // .deploy() method is used to deploy the contract
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        //console.log("owner address : ",owner.address);


        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        /* The .to.equal matcher is used to assert that the value of an expression
         is equal to a specified value. */
        

    })

    it("testing for transfer function ", async ()=>{
        const [owner,add1,add2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        // now deploy the token
        const hardHatToken = await Token.deploy();
        // transfer 10 token from owner to add1
        await hardHatToken.transfer(add1.address,10);
        expect(await hardHatToken.balanceOf(add1.address)).to.equal(10);
        // transfer from add1 to add2 : 5 tokens
        // connecting hardhat to add1
        await hardHatToken.connect(add1).transfer(add2.address,5);
        /* The await hardHatToken.connect() function allows you to send a transaction from another account. This is useful for testing purposes, as it allows you to simulate different scenarios and ensure that your contract is working as expected.
        To use the connect() function, you first need to specify the account that you want to send the transaction from. You can do this by passing the address of the account to the connect() function.
        Once you have connected to the account, you can then call any of the functions on the hardHatToken contract. The transaction will be sent from the account that you specified.*/
        expect(await hardHatToken.balanceOf(add2.address)).to.equal(5);
    })
})