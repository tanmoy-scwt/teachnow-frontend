import React from "react";
import style from "./style.module.css";
import Pagination from "@/components/ui/Pagination";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar";

import {
  JobsToolbar,
  JobsFilter,
  RecrutingBox,
  JobsListingCard
} from '../jobDetailLayout/index'

interface ListLayoutProps { currentPage?: number; }

const ListLayout = ({ currentPage }: ListLayoutProps) => {
  return (
    <div className={`section ${style.jobSection}`}>
      <LayoutWithSidebar
        sidebar={<>
          <JobsFilter />
          <div className={`hidden lg:block`}>
            <RecrutingBox />
          </div>
        </>}
        main={<>
          <section className="grid grid-cols-1 gap-6">
            <JobsToolbar
              total={184}
              page={1}
              perPage={10}
            />
            {Array.from({ length: 15 })?.map((_, index) => (<JobsListingCard key={`jobs${index}`} />))}
            <div className={`flex items-center justify-center mt-[20px]`}>
              <Pagination
                activePage={currentPage ? currentPage : 1}
                totalPages={30}
              />
            </div>
          </section>
        </>}
        mainOrder='order-2'
        asideOrder='order-1'
      />
    </div >
  );
};

export default ListLayout;
