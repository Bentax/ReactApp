import "./styles.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function App() {
  const [congrat, setCongrat] = useState("");
  useEffect(() => {
    (async () => {
      setCongrat(await contract.getCongrat());
    })();
  }, []);
  const addressContract = "0x3Efe9Eab5cFA8522e01703740658E8aC6c571019";
  const abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_newText",
          type: "string"
        }
      ],
      name: "setCongrat",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_text",
          type: "string"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [],
      name: "congrat",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getCongrat",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ];
  const provider = new ethers.providers.InfuraProvider("goerli");
  const contract = new ethers.Contract(addressContract, abi, provider);

  return (
    <div>
      <div>
        <h1>{congrat}</h1>
        {""}
      </div>
    </div>
  );
}
