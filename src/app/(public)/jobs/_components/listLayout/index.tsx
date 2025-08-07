import React from "react";
import style from "./style.module.css";
import Pagination from "@/components/ui/Pagination";
import LayoutWithSidebar from "@/components/layout/LayoutWithSidebar";
import { Suspense } from "react";

import {
  JobsToolbar,
  RecrutingBox,
  JobsListingCard,
  JobsFilter
} from '../jobDetailLayout/index'

interface ListLayoutProps { currentPage?: number; }

const ListLayout = ({ currentPage }: ListLayoutProps) => {
  return (
    <div style={{ position: 'relative', zIndex: 1000 }} className={`section ${style.jobSection}`}>
      <LayoutWithSidebar
        sidebar={<>
          <Suspense fallback={<div>Loading filters...</div>}>
            <JobsFilter />
            <div className={`hidden lg:block`}>
              <RecrutingBox />
            </div>
          </Suspense>
        </>}
        main={<>
          <section className="grid grid-cols-1 gap-6">
            <Suspense fallback={<div>Loading filters...</div>}>
              <JobsToolbar
                total={184}
                page={1}
                perPage={10}
              />
            </Suspense>
            {Array.from({ length: 15 })?.map((_, index) => (<JobsListingCard key={`jobs${index}`} />))}
            <div className={`flex items-center justify-center mt-[20px]`}>
              <Suspense fallback={<div>Loading filters...</div>}>
                <Pagination
                  activePage={currentPage ? currentPage : 1}
                  totalPages={30}
                />
              </Suspense>
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
