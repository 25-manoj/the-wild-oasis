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
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, booking, error };
}
