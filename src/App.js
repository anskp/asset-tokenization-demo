import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBuilding, 
  FaKey, 
  FaWallet, 
  FaCertificate,
  FaLink, 
  FaHome, 
  FaCoins, 
  FaUserCheck,
  FaMoneyBillWave,
  FaTools,
  FaCheckCircle
} from 'react-icons/fa';
import { SiBlockchaindotcom } from 'react-icons/si';
import { GiToken } from 'react-icons/gi';

function AssetTokenizationApp() {
  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  
  // Company information
  const [companyInfo, setCompanyInfo] = useState({
    name: "Acme Real Estate Holdings",
    industry: "Real Estate",
    registrationNumber: "REG12345678",
    country: "United States",
    establishedDate: "2010-05-15"
  });
  
  // DID and wallet information
  const [rootDID, setRootDID] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  
  // Verifiable credentials
  const [vcIssued, setVcIssued] = useState(false);
  
  // Soulbound token information
  const [soulboundTokenID, setSoulboundTokenID] = useState("");
  
  // Asset information
  const [assets, setAssets] = useState([
    { 
      id: "asset-001", 
      name: "Downtown Office Building", 
      type: "Commercial Real Estate", 
      value: 5000000,
      location: "123 Main St, New York, NY",
      acquisitionDate: "2018-03-10",
      registered: false
    }
  ]);
  
  // Token information
  const [token, setToken] = useState({
    name: "",
    symbol: "",
    totalSupply: 0,
    price: 0,
    contractAddress: ""
  });
  
  // Investors
  const [investors, setInvestors] = useState([]);
  
  // Auto-progress through steps for demonstration purposes
  useEffect(() => {
    if (!showAnimation) return;
    
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Reset to the beginning after a longer pause
        setTimeout(() => {
          resetState();
          setCurrentStep(0);
        }, 3000);
      }
    }, 5000); // 5 seconds per step
    
    return () => clearTimeout(timer);
  }, [currentStep, showAnimation]);
  
  // Reset all state
  const resetState = () => {
    setRootDID("");
    setWalletAddress("");
    setVcIssued(false);
    setSoulboundTokenID("");
    setAssets(assets.map(asset => ({ ...asset, registered: false })));
    setToken({
      name: "",
      symbol: "",
      totalSupply: 0,
      price: 0,
      contractAddress: ""
    });
    setInvestors([]);
  };
  // Step 1: Corporate Owner Setup functions
  
  // Create a corporate outlet
  const createCorporateOutlet = () => {
    console.log("Creating corporate outlet for:", companyInfo.name);
    return new Promise(resolve => {
      // Simulate API call
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
  
  // Generate a root DID for the corporate entity
  const generateRootDID = async () => {
    // Simulate DID creation
    const randomId = Array(16).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    const newDid = `did:ethr:${randomId}`;
    
    console.log("Generated Root DID:", newDid);
    setRootDID(newDid);
    
    return newDid;
  };
  
  // Create a wallet for the corporate outlet
  const createCorporateWallet = async () => {
    // Simulate wallet creation
    const randomWallet = "0x" + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    console.log("Created wallet address:", randomWallet);
    setWalletAddress(randomWallet);
    
    return randomWallet;
  };
  
  // Execute all corporate setup steps
  const setupCorporateOwner = async () => {
    try {
      await createCorporateOutlet();
      await generateRootDID();
      await createCorporateWallet();
      // Move to next step
      setCurrentStep(1);
    } catch (error) {
      console.error("Error in corporate setup:", error);
    }
  };
  
  // Format a DID for display
  const formatDID = (did) => {
    if (!did) return "Not generated";
    return `${did.substring(0, 8)}...${did.substring(did.length - 6)}`;
  };
  
  // Format a wallet address for display
  const formatAddress = (address) => {
    if (!address) return "Not created";
    return `${address.substring(0, 8)}...${address.substring(address.length - 6)}`;
  };
  // Step 2: Verifiable Credentials Issuance functions
  
  // Design and issue verifiable credentials
  const issueVerifiableCredentials = async () => {
    if (!rootDID) {
      console.error("Cannot issue VC: Root DID not created");
      return false;
    }
    
    // Simulate VC issuance
    console.log("Issuing verifiable credentials to DID:", rootDID);
    setVcIssued(true);
    
    // Move to next step
    setCurrentStep(2);
    return true;
  };
  
  // Step 3: Soulbound Token Creation functions
  
  // Design and mint soulbound token
  const createSoulboundToken = async () => {
    if (!rootDID || !vcIssued) {
      console.error("Cannot create soulbound token: Prerequisites not met");
      return false;
    }
    
    // Simulate token creation
    const tokenId = "SBT-" + Date.now().toString(16);
    console.log("Creating soulbound token:", tokenId);
    
    // Simulate blockchain transaction for minting
    const txHash = "0x" + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    console.log("Minting transaction:", txHash);
    
    setSoulboundTokenID(tokenId);
    
    // Move to next step
    setCurrentStep(3);
    return tokenId;
  };
  
  // Get soulbound token details
  const getSoulboundTokenDetails = () => {
    return {
      id: soulboundTokenID,
      owner: rootDID,
      issuanceDate: new Date().toISOString(),
      type: "Corporate Identity",
      transferable: false
    };
  };
  // Step 4: Asset Registration functions
  
  // Register assets on blockchain
  const registerAssets = async () => {
    if (!soulboundTokenID) {
      console.error("Cannot register assets: Soulbound token not created");
      return false;
    }
    
    // Simulate asset registration
    console.log("Registering assets with soulbound token:", soulboundTokenID);
    
    // Update assets to registered status
    const updatedAssets = assets.map(asset => ({ ...asset, registered: true }));
    setAssets(updatedAssets);
    
    // Move to next step
    setCurrentStep(4);
    return true;
  };
  
  // Format currency for display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Step 5: Asset Tokenization functions
  
  // Design tokens and create smart contract
  const tokenizeAssets = async () => {
    if (!assets.some(asset => asset.registered)) {
      console.error("Cannot tokenize assets: No registered assets");
      return false;
    }
    
    // Calculate total asset value
    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
    
    // Create token
    const newToken = {
      name: "Acme Real Estate Token",
      symbol: "ACRE",
      totalSupply: 5000000,
      price: totalValue / 5000000,
      contractAddress: "0x" + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')
    };
    
    console.log("Creating token:", newToken);
    setToken(newToken);
    
    // Move to next step
    setCurrentStep(5);
    return newToken;
  };
  // Step 6: Investor Onboarding functions
  
  // Onboard investors to the platform
  const onboardInvestors = async () => {
    if (!token.contractAddress) {
      console.error("Cannot onboard investors: Token not created");
      return false;
    }
    
    // Generate sample investors
    const newInvestors = [
      {
        id: "inv-001",
        name: "John Smith",
        walletAddress: "0x" + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
        kycVerified: true,
        investmentAmount: 250000,
        tokenAmount: Math.floor(250000 / token.price),
        joinDate: new Date().toISOString()
      },
      {
        id: "inv-002",
        name: "Alice Johnson",
        walletAddress: "0x" + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
        kycVerified: true,
        investmentAmount: 500000,
        tokenAmount: Math.floor(500000 / token.price),
        joinDate: new Date().toISOString()
      },
      {
        id: "inv-003",
        name: "Global Investments Ltd",
        walletAddress: "0x" + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
        kycVerified: true,
        investmentAmount: 1000000,
        tokenAmount: Math.floor(1000000 / token.price),
        joinDate: new Date().toISOString()
      }
    ];
    
    console.log("Onboarding investors:", newInvestors);
    setInvestors(newInvestors);
    
    // Move to next step
    setCurrentStep(6);
    return newInvestors;
  };
  
  // Step 7: Dividend Distribution functions
  
  // Calculate and distribute dividends
  const distributeDividends = async () => {
    if (investors.length === 0) {
      console.error("Cannot distribute dividends: No investors");
      return false;
    }
    
    // Simulate total dividend amount
    const totalDividend = 250000;
    
    // Calculate total tokens issued to investors
    const totalTokens = investors.reduce((sum, investor) => sum + investor.tokenAmount, 0);
    
    // Distribute dividends proportionally
    const investorsWithDividends = investors.map(investor => {
      const proportion = investor.tokenAmount / totalTokens;
      const dividendAmount = totalDividend * proportion;
      
      return {
        ...investor,
        dividend: dividendAmount,
        dividendDistributed: true,
        dividendDate: new Date().toISOString()
      };
    });
    
    console.log("Distributing dividends:", investorsWithDividends);
    setInvestors(investorsWithDividends);
    
    // Move to next step
    setCurrentStep(7);
    return true;
  };
  // Step 8: Ongoing Management functions
  
  // Perform ongoing management tasks
  const performOngoingManagement = async () => {
    // Simulate management tasks
    console.log("Performing ongoing management tasks");
    
    // In a real app, this would include:
    // - Token maintenance
    // - Compliance monitoring
    // - Investor relations management
    
    return true;
  };
  
  // Define UI for each step
  const steps = [
    // Step 1: Corporate Owner Setup
    {
      id: 0,
      title: "Corporate Owner Setup",
      subtitle: "Create the foundation for your tokenization",
      icon: <FaBuilding className="text-white h-16 w-16 mb-4" />,
      color: "from-blue-600 to-blue-800",
      tasks: [
        { name: "Corporate Outlet Creation", completed: rootDID !== "" || walletAddress !== "" },
        { name: "Root DID Creation", completed: rootDID !== "" },
        { name: "Wallet Creation", completed: walletAddress !== "" }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-white/70 mb-2">Company Information</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-white/50 text-xs">Name</div>
                  <div className="text-white font-medium">{companyInfo.name}</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">Industry</div>
                  <div className="text-white font-medium">{companyInfo.industry}</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">Registration</div>
                  <div className="text-white font-medium">{companyInfo.registrationNumber}</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">Country</div>
                  <div className="text-white font-medium">{companyInfo.country}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaKey className="text-white/70 mr-2" />
                <div className="text-white font-medium">Root DID</div>
              </div>
              <div className="font-mono text-sm text-white/90 break-all">
                {rootDID || "Not generated yet"}
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaWallet className="text-white/70 mr-2" />
                <div className="text-white font-medium">Corporate Wallet</div>
              </div>
              <div className="font-mono text-sm text-white/90 break-all">
                {walletAddress || "Not created yet"}
              </div>
            </div>
            
            {!rootDID && !walletAddress && (
              <button 
                onClick={setupCorporateOwner}
                className="w-full bg-white hover:bg-white/90 text-blue-800 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Set Up Corporate Owner
              </button>
            )}
          </div>
        </div>
      )
    },
    
    // Step 2: Verifiable Credentials Issuance
    {
      id: 1,
      title: "Verifiable Credentials",
      subtitle: "Issue credentials to the corporate entity",
      icon: <FaCertificate className="text-white h-16 w-16 mb-4" />,
      color: "from-purple-600 to-purple-800",
      tasks: [
        { name: "VC Design", completed: vcIssued },
        { name: "VC Issuance", completed: vcIssued }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaBuilding className="text-white/70 mr-2" />
                <div className="text-white font-medium">Corporate Identity</div>
              </div>
              <div className="text-white/90">
                {companyInfo.name} - {companyInfo.registrationNumber}
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaKey className="text-white/70 mr-2" />
                <div className="text-white font-medium">Associated DID</div>
              </div>
              <div className="font-mono text-sm text-white/90 break-all">
                {formatDID(rootDID)}
              </div>
            </div>
            
            {vcIssued ? (
              <div className="bg-green-500/20 p-4 rounded-lg">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <div className="text-white font-medium">Credentials Successfully Issued</div>
                </div>
                <div className="text-white/70 text-sm mt-2">
                  Corporate identity credentials have been issued and linked to the DID
                </div>
              </div>
            ) : (
              <button 
                onClick={issueVerifiableCredentials}
                disabled={!rootDID}
                className={`w-full ${rootDID ? 'bg-white hover:bg-white/90 text-purple-800' : 'bg-white/30 cursor-not-allowed text-white/50'} py-3 px-4 rounded-lg font-medium transition-colors`}
              >
                Issue Verifiable Credentials
              </button>
            )}
          </div>
        </div>
      )
    },
    // Step 3: Soulbound Token Creation
    {
      id: 2,
      title: "Soulbound Token Creation",
      subtitle: "Create a non-transferable token tied to the corporate identity",
      icon: <FaLink className="text-white h-16 w-16 mb-4" />,
      color: "from-indigo-600 to-indigo-800",
      tasks: [
        { name: "Soulbound Token Design", completed: soulboundTokenID !== "" },
        { name: "Soulbound NFT Minting", completed: soulboundTokenID !== "" }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaKey className="text-white/70 mr-2" />
                <div className="text-white font-medium">Linked Identity (DID)</div>
              </div>
              <div className="font-mono text-sm text-white/90 break-all">
                {formatDID(rootDID)}
              </div>
            </div>
            
            {soulboundTokenID ? (
              <div>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-3">
                    <FaLink className="text-white/70 mr-2" />
                    <div className="text-white font-medium">Soulbound Token ID</div>
                  </div>
                  <div className="font-mono text-sm text-white/90 break-all">
                    {soulboundTokenID}
                  </div>
                </div>
                
                <div className="bg-green-500/20 p-4 rounded-lg">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-2" />
                    <div className="text-white font-medium">Token Successfully Created</div>
                  </div>
                  <div className="text-white/70 text-sm mt-2">
                    Soulbound token permanently linked to corporate identity
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={createSoulboundToken}
                disabled={!rootDID || !vcIssued}
                className={`w-full ${rootDID && vcIssued ? 'bg-white hover:bg-white/90 text-indigo-800' : 'bg-white/30 cursor-not-allowed text-white/50'} py-3 px-4 rounded-lg font-medium transition-colors`}
              >
                Create Soulbound Token
              </button>
            )}
          </div>
        </div>
      )
    },
    
    // Step 4: Asset Registration
    {
      id: 3,
      title: "Asset Registration",
      subtitle: "Register assets on the blockchain",
      icon: <FaHome className="text-white h-16 w-16 mb-4" />,
      color: "from-green-600 to-green-800",
      tasks: [
        { name: "Asset Identification", completed: assets.length > 0 },
        { name: "Asset Valuation", completed: assets.length > 0 },
        { name: "Asset Registration", completed: assets.some(a => a.registered) }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaLink className="text-white/70 mr-2" />
                <div className="text-white font-medium">Soulbound Token ID</div>
              </div>
              <div className="font-mono text-sm text-white/90 break-all">
                {soulboundTokenID || "Not created yet"}
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaHome className="text-white/70 mr-2" />
                <div className="text-white font-medium">Assets</div>
              </div>
              
              {assets.map((asset, index) => (
                <div key={asset.id} className={`${index > 0 ? 'mt-4 pt-4 border-t border-white/10' : ''}`}>
                  <div className="flex justify-between">
                    <div className="text-white font-medium">{asset.name}</div>
                    <div className="text-white/70">{formatCurrency(asset.value)}</div>
                  </div>
                  <div className="text-white/50 text-sm">
                    {asset.type} - {asset.location}
                  </div>
                  {asset.registered && (
                    <div className="flex items-center mt-1 text-green-400 text-xs">
                      <FaCheckCircle className="mr-1" /> Registered on blockchain
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {!assets.some(a => a.registered) ? (
              <button 
                onClick={registerAssets}
                disabled={!soulboundTokenID}
                className={`w-full ${soulboundTokenID ? 'bg-white hover:bg-white/90 text-green-800' : 'bg-white/30 cursor-not-allowed text-white/50'} py-3 px-4 rounded-lg font-medium transition-colors`}
              >
                Register Assets
              </button>
            ) : (
              <div className="bg-green-500/20 p-4 rounded-lg">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <div className="text-white font-medium">Assets Successfully Registered</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },
    // Step 5: Asset Tokenization
    {
      id: 4,
      title: "Asset Tokenization",
      subtitle: "Create tokens representing ownership of the registered assets",
      icon: <GiToken className="text-white h-16 w-16 mb-4" />,
      color: "from-yellow-600 to-yellow-800",
      tasks: [
        { name: "Token Design", completed: token.name !== "" },
        { name: "Smart Contract Creation", completed: token.contractAddress !== "" },
        { name: "Token Minting", completed: token.totalSupply > 0 }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            {token.name ? (
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-white/50 text-xs">Token Name</div>
                      <div className="text-white font-medium">{token.name}</div>
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Symbol</div>
                      <div className="text-white font-medium">{token.symbol}</div>
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Total Supply</div>
                      <div className="text-white font-medium">{token.totalSupply.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Token Price</div>
                      <div className="text-white font-medium">{formatCurrency(token.price)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <SiBlockchaindotcom className="text-white/70 mr-2" />
                    <div className="text-white font-medium">Smart Contract</div>
                  </div>
                  <div className="font-mono text-sm text-white/90 break-all">
                    {token.contractAddress}
                  </div>
                </div>
                
                <div className="bg-green-500/20 p-4 rounded-lg">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-2" />
                    <div className="text-white font-medium">Tokens Successfully Created</div>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={tokenizeAssets}
                disabled={!assets.some(a => a.registered)}
                className={`w-full ${assets.some(a => a.registered) ? 'bg-white hover:bg-white/90 text-yellow-800' : 'bg-white/30 cursor-not-allowed text-white/50'} py-3 px-4 rounded-lg font-medium transition-colors`}
              >
                Tokenize Assets
              </button>
            )}
          </div>
        </div>
      )
    },
    
    // Step 6: Investor Onboarding
    {
      id: 5,
      title: "Investor Onboarding",
      subtitle: "Verify and onboard investors to the platform",
      icon: <FaUserCheck className="text-white h-16 w-16 mb-4" />,
      color: "from-pink-600 to-pink-800",
      tasks: [
        { name: "Investor Verification", completed: investors.length > 0 },
        { name: "Investor Onboarding", completed: investors.length > 0 }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            {investors.length > 0 ? (
              <div>
                <div className="text-white/70 mb-3">Onboarded Investors</div>
                {investors.map((investor, index) => (
                  <div key={investor.id} className={`bg-white/5 p-4 rounded-lg ${index > 0 ? 'mt-4' : ''}`}>
                    <div className="flex justify-between mb-2">
                      <div className="text-white font-medium">{investor.name}</div>
                      <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">Verified</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-white/50 text-xs">Investment</div>
                        <div className="text-white">{formatCurrency(investor.investmentAmount)}</div>
                      </div>
                      <div>
                        <div className="text-white/50 text-xs">Tokens</div>
                        <div className="text-white">{investor.tokenAmount.toLocaleString()} {token.symbol}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <button 
                onClick={onboardInvestors}
                disabled={!token.contractAddress}
                className={`w-full ${token.contractAddress ? 'bg-white hover:bg-white/90 text-pink-800' : 'bg-white/30 cursor-not-allowed text-white/50'} py-3 px-4 rounded-lg font-medium transition-colors`}
              >
                Onboard Investors
              </button>
            )}
          </div>
        </div>
      )
    },
    // Step 7: Dividend Distribution
    {
      id: 6,
      title: "Dividend Distribution",
      subtitle: "Calculate and distribute dividends to token holders",
      icon: <FaMoneyBillWave className="text-white h-16 w-16 mb-4" />,
      color: "from-cyan-600 to-cyan-800",
      tasks: [
        { name: "Dividend Calculation", completed: investors.some(inv => inv.dividend) },
        { name: "Dividend Distribution", completed: investors.some(inv => inv.dividend) }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            {investors.some(inv => inv.dividend) ? (
              <div>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-white font-medium">Dividend Summary</div>
                    <div className="text-white/70">{new Date().toLocaleDateString()}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-white/50 text-xs">Total Distribution</div>
                      <div className="text-white font-medium">{formatCurrency(250000)}</div>
                    </div>
                    <div>
                      <div className="text-white/50 text-xs">Recipients</div>
                      <div className="text-white font-medium">{investors.length}</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-white/70 mb-3">Investor Distributions</div>
                {investors.map((investor, index) => (
                  <div key={investor.id} className={`bg-white/5 p-4 rounded-lg ${index > 0 ? 'mt-4' : ''}`}>
                    <div className="flex justify-between mb-2">
                      <div className="text-white font-medium">{investor.name}</div>
                      <div className="text-white font-medium">{formatCurrency(investor.dividend)}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-white/50 text-xs">Tokens Held</div>
                        <div className="text-white">{investor.tokenAmount.toLocaleString()} {token.symbol}</div>
                      </div>
                      <div>
                        <div className="text-white/50 text-xs">Status</div>
                        <div className="text-green-400">Distributed</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <button 
                onClick={distributeDividends}
                disabled={investors.length === 0}
                className={`w-full ${investors.length > 0 ? 'bg-white hover:bg-white/90 text-cyan-800' : 'bg-white/30 cursor-not-allowed text-white/50'} py-3 px-4 rounded-lg font-medium transition-colors`}
              >
                Distribute Dividends
              </button>
            )}
          </div>
        </div>
      )
    },
    
    // Step 8: Ongoing Management
    {
      id: 7,
      title: "Ongoing Management",
      subtitle: "Maintain token integrity and manage investor relations",
      icon: <FaTools className="text-white h-16 w-16 mb-4" />,
      color: "from-gray-600 to-gray-800",
      tasks: [
        { name: "Token Maintenance", completed: true },
        { name: "Compliance Monitoring", completed: true },
        { name: "Investor Relations", completed: true }
      ],
      content: (
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="space-y-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <SiBlockchaindotcom className="text-white/70 mr-2" />
                <div className="text-white font-medium">Asset Status</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-white/50 text-xs">Total Assets</div>
                  <div className="text-white font-medium">{assets.length}</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">Total Value</div>
                  <div className="text-white font-medium">{formatCurrency(assets.reduce((sum, asset) => sum + asset.value, 0))}</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">Token Supply</div>
                  <div className="text-white font-medium">{token.totalSupply ? token.totalSupply.toLocaleString() : '-'}</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs">Investors</div>
                  <div className="text-white font-medium">{investors.length}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <FaTools className="text-white/70 mr-2" />
                <div className="text-white font-medium">Management Tasks</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <div className="text-white">Daily compliance check complete</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <div className="text-white">Token smart contract secure</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <div className="text-white">Investor communications sent</div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => {
                resetState();
                setCurrentStep(0);
              }}
              className="w-full bg-white hover:bg-white/90 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Start New Project
            </button>
          </div>
        </div>
      )
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const stepIndicatorVariants = {
    inactive: { 
      scale: 1, 
      opacity: 0.5,
      border: "2px solid rgba(255, 255, 255, 0.3)"
    },
    active: { 
      scale: 1.1, 
      opacity: 1,
      border: "2px solid rgba(255, 255, 255, 1)",
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    },
    completed: { 
      scale: 1, 
      opacity: 1,
      background: "rgba(255, 255, 255, 0.2)",
      border: "2px solid rgba(255, 255, 255, 0.8)"
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-white rounded-full opacity-5"></div>
      
      {/* Content container */}
      <div className="relative w-full max-w-4xl mx-auto px-4 py-12 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Asset Tokenization Platform
          </h1>
          <p className="text-xl text-white/80 mt-2">
            Transform real-world assets into digital tokens
          </p>
        </div>
        
        {/* Step indicators */}
        <div className="flex justify-center mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={`w-12 h-12 mx-3 rounded-full flex items-center justify-center text-white cursor-pointer`}
              variants={stepIndicatorVariants}
              animate={
                currentStep > index
                  ? "completed"
                  : currentStep === index
                    ? "active"
                    : "inactive"
              }
              onClick={() => setCurrentStep(index)}
            >
              {currentStep > index ? (
                <FaCheckCircle className="text-white" />
              ) : (
                <span>{index + 1}</span>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center justify-center"
          >
            {/* Icon */}
            <div className={`rounded-full p-4 bg-gradient-to-br ${steps[currentStep].color}`}>
              {steps[currentStep].icon}
            </div>
            
            {/* Title */}
            <h2 className="text-4xl font-bold text-white mb-2 mt-4">
              {steps[currentStep].title}
            </h2>
            
            {/* Subtitle */}
            <p className="text-white/80 text-xl mb-8 text-center max-w-2xl">
              {steps[currentStep].subtitle}
            </p>
            
            {/* Tasks */}
            <div className="flex justify-center space-x-6 mb-8 overflow-auto">
              {steps[currentStep].tasks.map((task, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  {task.completed ? (
                    <FaCheckCircle className="text-green-400 mr-2" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-white/50 rounded-full mr-2"></div>
                  )}
                  <span className="text-white">{task.name}</span>
                </div>
              ))}
            </div>
            
            {/* Step content */}
            <div className="w-full max-w-2xl">
              {steps[currentStep].content}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Controls */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAnimation(!showAnimation)}
            className="px-6 py-3 bg-white text-purple-900 rounded-lg font-bold hover:bg-white/90 transition-colors"
          >
            {showAnimation ? "Pause Animation" : "Resume Animation"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssetTokenizationApp;