import "./styles.css";
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [congrat, setCongrat] = useState("");
  const [address, setAddress] = useState("");
  const congratRef = useRef();
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
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(addressContract, abi, provider);

  async function handleClickMetamask() {
    const address = await provider.send("eth_requestAccounts", []);
    setAddress(address[0]);
  }

  async function setHandleCongrat(event) {
    // дефолтное событие, чтобы страница не обновлялась
    event.preventDefault();
    try {
      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);
      contractWithSigner.setCongrat(congratRef.current.value);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="flex justify-center pt-8">
        {address ? (
          <form onSubmit={setHandleCongrat}>
            <input
              class="bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Введите данные"
              ref={congratRef}
            ></input>
            <button
              className="bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="submit"
            >
              Отправить
            </button>
          </form>
        ) : (
          <button
            className="bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onClick={handleClickMetamask}
          >
            MetaMask
          </button>
        )}
      </div>
      <div>
        <div>
          <h1>{congrat}</h1>
          {congrat && (<img alt="MX" src="https://www.linkpicture.com/q/shop_father_32_32.jpg"/>)}
          </div>
      </div>
    </div>
  );
}
