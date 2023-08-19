import "./App.css";
import { LuArrowUpDown } from "react-icons/lu";
import axios from "axios";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
function App() {
  const baseURL = "https://open.er-api.com/v6/latest/USD";
  const usdRates = [50, 100, 52, 23, 401];
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post.rates);
  return (
    <div style={{ marginTop: 15 }}>
      <div class="flex flex-row ...">
        <div class="p-6 max-w-sm mx-auto bg-blue-300	 rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
          </div>
          <div>
            <div class="text-xl font-medium text-black">300k USD</div>
            <p class="text-slate-500">1.25%</p>
          </div>
        </div>
        <div class="p-6 max-w-sm mx-auto bg-stone-100		 rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
          </div>
          <div>
            <div class="text-xl font-medium text-black">200k USD</div>
            <p class="text-slate-500"></p>
          </div>
        </div>
        <div class="p-6 max-w-sm mx-auto bg-stone-100		 rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
          </div>
          <div>
            <div class="text-xl font-medium text-black">100k USD</div>
            {/* <p class="text-slate-500">You have a new message!</p> */}
          </div>
        </div>
      </div>
      <section style={{ marginTop: 20 }} class="container px-4 mx-auto">
        <div class="flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-2">
                          <span>Transaction date</span>
                          <LuArrowUpDown />
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Invoice No.
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Payer
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Payee
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        USD Equivalent
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status{" "}
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action{" "}
                      </th>
                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only"></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <span>5/20/2023</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-cyan-500	underline 
                       dark:text-gray-300 whitespace-nowrap"
                      >
                        ILC3X4
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1  gap-x-2 text-emerald-500  dark:bg-gray-800">
                          <h2 class="text-sm font-normal">Green Kaya </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          {/* <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""> */}
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Green Kaya
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {usdRates[0] * post.rates.INR} INR
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            $ {usdRates[0]}
                          </button>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <AiOutlineLine />
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-black-500 bg-slate-300 bg-clip-padding p-1	rounded-full  transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"> */}

                          <span>5/20/2023</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-cyan-500	underline 
                       dark:text-gray-300 whitespace-nowrap"
                      >
                        ILC3X4
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1  gap-x-2 text-emerald-500  dark:bg-gray-800">
                          <h2 class="text-sm font-normal">Green Kaya </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          {/* <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""> */}
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Green Kaya
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {usdRates[1] * post.rates.INR} INR
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            $ {usdRates[1]}
                          </button>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <AiOutlineLine />
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-black-500 bg-slate-300 bg-clip-padding p-1	rounded-full  transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"> */}

                          <span>5/20/2023</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-cyan-500	underline 
                       dark:text-gray-300 whitespace-nowrap"
                      >
                        ILC3X4
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1  gap-x-2 text-emerald-500  dark:bg-gray-800">
                          <h2 class="text-sm font-normal">Green Kaya </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          {/* <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""> */}
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Green Kaya
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {usdRates[2] * post.rates.INR} INR
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            $ {usdRates[2]}
                          </button>
                        </div>
                      </td><td class="px-4 py-4 text-sm whitespace-nowrap">
                        <AiOutlineLine />
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-black-500 bg-slate-300 bg-clip-padding p-1	rounded-full  transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"> */}

                          <span>5/20/2023</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-cyan-500	underline 
                       dark:text-gray-300 whitespace-nowrap"
                      >
                        ILC3X4
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1  gap-x-2 text-emerald-500  dark:bg-gray-800">
                          <h2 class="text-sm font-normal">Green Kaya </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          {/* <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80" alt=""> */}
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Green Kaya
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {usdRates[3] * post.rates.INR} INR
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            $ {usdRates[3]}
                          </button>
                        </div>
                      </td><td class="px-4 py-4 text-sm whitespace-nowrap">
                        <AiOutlineLine />
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-black-500 bg-slate-300 bg-clip-padding p-1	rounded-full  transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          {/* <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"> */}

                          <span>5/20/2023</span>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-cyan-500	underline 
                       dark:text-gray-300 whitespace-nowrap"
                      >
                        ILC3X4
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1  gap-x-2 text-emerald-500  dark:bg-gray-800">
                          <h2 class="text-sm font-normal">Green Kaya </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          {/* <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80" alt=""> */}
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                              Green Kaya
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {usdRates[4] * post.rates.INR} INR
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            $ {usdRates[4]}
                          </button>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <AiOutlineLine />
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <button class="text-black-500 bg-slate-300 bg-clip-padding p-1	rounded-full  transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
