
async function  main() {
    const [deployer] = await ethers.getSigners();
    const Token_ins = await ethers.getContractFactory("Token");
    const token = await Token_ins.deploy();
    console.log("token address = ",token.address);

    
}

main().then(()=>{
    process.exit(0);
}).catch((err)=>{
    console.error(err);
    process.exit(1);
})



/*  https://sepolia.etherscan.io/tx/0xd46dbde8af1e264bee73c8962850b5356478b246d3a24f3bd4f26e4d8e521352
    successfully deployed */
    