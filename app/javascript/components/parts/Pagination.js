  import React from "react"
  import PropTypes from "prop-types"

  // pagination import
  import { Pagination } from '@material-ui/lab'


  export default function PaginationControlled(props) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    props.pageChange(value)
    setPage(value);
  };

  return (
    <div>
      <Pagination count={props.count} page={page} onChange={handleChange} />
    </div>
  );
}
