import React from "react";
import { Container, RowHeader, Row, Column } from "./style";

interface ListProps {
  columns: number;
  data: Array<{ [key: string]: any }>;
  minRows: number;
}

export function List({ columns, data, minRows }: ListProps) {
  const columnWidth = `${100 / columns}%`;

  const renderHeader = () => {
    return (
      <RowHeader style={{ marginTop: 0 }}>
        {Object.keys(data[0])
          .slice(0, columns)
          .map((key) => (
            <Column key={key} style={{ width: columnWidth }}>
              {key}
            </Column>
          ))}
      </RowHeader>
    );
  };

  const renderData = () => {
    const rowsToRender = Math.max(minRows, data.length);

    return (
      <>
        {Array.from({ length: rowsToRender }).map((_, index) => {
          if (index === 0) return null; // Ignore the first iteration
          const item = data[index - 1] || {}; // Adjust index to match data
          const isLastRow = index === rowsToRender - 1; // Check if it's the last row
          return (
            <Row
              key={index}
              className={`${index % 2 === 0 ? "even-row" : "odd-row"} ${
                isLastRow ? "last-row" : ""
              }`}
            >
              {Object.values(item)
                .slice(0, columns)
                .map((value, idx) => (
                  <Column key={idx} style={{ width: columnWidth }}>
                    {value}
                  </Column>
                ))}
            </Row>
          );
        })}
      </>
    );
  };

  return (
    <Container>
      {renderHeader()}
      <div style={{ overflowY: "auto" }}>{renderData()}</div>
    </Container>
  );
}
