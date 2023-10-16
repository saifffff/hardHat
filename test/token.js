const {expect} = require("chai"); // imports  the expect function from the Chai assertion library. The expect function is used to assert the expected behavior of your code.

// mocha is a framework , chai is its library

// Tcon is alis of token
describe("Tcon",()=>{
    it("Deployment should transfer total supply of tokens to the owner",async ()=>{
        const [owner] = await ethers.getSigners();
        /* The brackets in the code const [owner] = await ethers.getSigners(); are used to destructure the result of the ethers.getSigners() function.
        The ethers.getSigners() function returns an array of signers. Destructuring allows you to extract the individual elements of the array into variables. */
        console.log("Singner object : ",owner);
        const Token = await ethers.getContractFactory("Token");
        // getContractFactory gives us an instance of the contract
        const hardhatToken = await Token.deploy();
        // .deploy() method is used to deploy the contract
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        console.log("owner address : ",owner.address);


        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        /* The .to.equal matcher is used to assert that the value of an expression
         is equal to a specified value. */
        

    })
})