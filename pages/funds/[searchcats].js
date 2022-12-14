import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/UI/Footer";
import Cards from "../../components/UI/FundCards";
import Header from "../../components/UI/Header";
import CatSearch from "../../components/UI/CatSearch";
import { useForm } from "react-hook-form";
import Pagination from "../../components/UI/Pagination";

function Search() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { keyword, category, page } = router.query;
  
  
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)


  const [data, setData] = useState(null);

  useEffect(() => {
    const sync = async () => {
      let result = await fetch(
        "http://gohelpme.online/api/funds/search?keyword=" +
          keyword +
          "&category=" +
          category +
          "&page=" +
          currentPage,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (result.status >= 200 && result.status <= 300) {
        const jsonresultData = await result.json();
        setCurrentPage(jsonresultData.current)
        setTotalPages(jsonresultData.pages)

        //console.log(jsonresultData.response.created_funds)

        let createdFunds;

        if (jsonresultData) {
          createdFunds = jsonresultData.funds.map((items) => {
            return <Cards key={items.title} items={items} />;
          });
        }

        setData(createdFunds);
      }
    };

    sync();
  }, [keyword, category, currentPage]);



  const paginationHandler = (data) => {
console.log(`page.no: ${data}`)
setCurrentPage(data)

  }

  return (
    <div>
      <Header />
      <CatSearch placeholder="Search by fund" />
      <div className="xl:w-[1200px] mx-10 min-md:mx-auto xl:mx-auto max-md:flex-col max-md:flex">
        {data}
      </div>
      <div className="cursor-pointer">
          <Pagination handler={paginationHandler} currentpage={currentPage} totalpages={totalPages}  />
        </div>
      <Footer />
    </div>
  );
}

export default Search;
