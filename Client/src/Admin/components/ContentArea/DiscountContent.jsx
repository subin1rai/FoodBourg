import {
  CouponTable,
  Pagination,
  DiscountNavigation,
  SearchFilter,
} from "./ContentAreaIndex";

function DiscountContent() {
  return (
    <div>
      <DiscountNavigation />
      <SearchFilter />
      <CouponTable />
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
}

export default DiscountContent;
