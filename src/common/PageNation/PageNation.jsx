import React from "react";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./PageNation.css";

const PageNation = ({ pageCount, page, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={<FiChevronLeft />}
      nextLabel={<FiChevronRight />}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={page - 1}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      // breakLabel="..."
      // breakClassName="page-item"
      // breakLinkClassName="page-link"
      containerClassName="pagination"
      // activeClassName="active"
      // renderOnZeroPageCount={null}
    />
  );
};

export default PageNation;
