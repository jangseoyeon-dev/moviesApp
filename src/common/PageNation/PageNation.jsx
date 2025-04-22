import React from "react";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./PageNation.css";

const PageNation = ({ pageCount, page, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={<FiChevronLeft />}
      nextLabel={<FiChevronRight />}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      pageLinkClassName={"pagination__link"}
      activeLinkClassName={"pagination__link__active"}
      forcePage={page - 1}
    />
  );
};

export default PageNation;
