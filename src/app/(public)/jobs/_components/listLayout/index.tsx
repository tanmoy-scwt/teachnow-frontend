import JobsFilter from "@/components/common/JobsFilter";
import Container from "@/components/ui/container";
import React from "react";
import style from "./style.module.css";
import { FaFilter } from "react-icons/fa";
import JobsListBox from "@/components/common/JobsListBox";
import JobsToolbar from "../jobsToolbar";
import Pagination from "@/components/ui/Pagination";

interface ListLayoutProps { currentPage?: number; }

const ListLayout = ({ currentPage }: ListLayoutProps) => {
  return (
    <section className={`section ${style.jobSection}`}>
      <Container>
        <div className="flex gap-8 flex-wrap md:flex-nowrap relative">
          <button
            className="block md:hidden absolute top-0 right-0 z-20 p-2"
          // onClick={() => setFilterOpen(!filterOpen)}
          >
            <FaFilter />
          </button>

          {/* <aside
            className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-40 p-4 transition-transform transform ${filterOpen ? "translate-x-0" : "-translate-x-full"
              } md:relative md:translate-x-0 md:w-[30%] md:block`}
          > */}

          <aside
            className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-40 p-4 transition-transform transform md:relative md:translate-x-0 md:w-[30%] md:block`}
          >
            <div className="block md:hidden text-right mb-2">
              {/* <button onClick={() => setFilterOpen(false)}>✕</button> */}
            </div>
            <JobsFilter />
          </aside>


          {/* {filterOpen && (
            <div
              className="fixed inset-0 bg-transparent bg-opacity-40 z-100 md:hidden"
              onClick={() => setFilterOpen(false)}
            />
          )} */}

          <main className="w-full md:w-[70%] z-10">
            <section className="grid grid-cols-1 gap-6">
              <JobsToolbar
                total={184}
                page={1}
                perPage={10}
              />
              {Array.from({ length: 15 })?.map((_, index) => (<JobsListBox key={`jobs${index}`} />))}
              <div className={`flex items-center justify-center mt-[20px]`}>
                <Pagination
                  activePage={currentPage ? currentPage : 1}
                  totalPages={30}
                />
              </div>
            </section>
          </main>
        </div>
      </Container >
    </section >
  );
};

export default ListLayout;
