import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBooking() {
  const [searchParams] = useSearchParams();
  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // SORT BY
  const sortByRaw = searchParams.get("sortBy") || "startDate-dec";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  // PAGENATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: booking, count } = {},
    error,
  } = useQuery({
    queryKey: ["booking", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, booking, error, count };
}
