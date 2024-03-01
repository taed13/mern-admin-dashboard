import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsPanel,
} from "@mui/x-data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsPanel />
    </GridToolbarContainer>
  );
}

export default function CustomColumnMenu() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
