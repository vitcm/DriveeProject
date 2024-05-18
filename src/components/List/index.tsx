import React from "react";
import { Container, ContainerList, RowHeader, Row, Column } from "./style";

interface ListProps {
  columns: number;
  data: Array<{ [key: string]: any }>;
  minRows: number;
}

export function List({ columns, data, minRows }: ListProps) {
  const columnWidth = `${100 / columns}%`;
  const rowHeight = 25;

  const renderHeader = () => {
    if (data.length === 0) {
      return (
        <RowHeader style={{ marginTop: 0 }}>
          {Array.from({ length: columns }).map((_, idx) => (
            <Column key={idx} style={{ width: columnWidth }}>
              {"Column " + (idx + 1)}
            </Column>
          ))}
        </RowHeader>
      );
    }

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
    const emptyRowCount = Math.max(minRows - data.length, 0);
    const emptyRows = Array.from({ length: emptyRowCount }).map((_, index) => (
      <Row
        key={`empty-${index}`}
        className={`${index % 2 === 0 ? "odd-row" : "even-row"}`}
      >
        {Array.from({ length: columns }).map((_, idx) => (
          <Column key={`empty-${index}-${idx}`} style={{ width: columnWidth }}>
            &nbsp;
          </Column>
        ))}
      </Row>
    ));

    return (
      <ContainerList style={{ maxHeight: minRows * rowHeight }}>
        {data.map((item, index) => (
          <Row
            key={index}
            className={`${index % 2 === 0 ? "even-row" : "odd-row"} `}
            style={{ height: rowHeight }}
          >
            {Object.values(item)
              .slice(0, columns)
              .map((value, idx) => (
                <Column key={idx} style={{ width: columnWidth }}>
                  {value}
                </Column>
              ))}
          </Row>
        ))}
        {emptyRows}
      </ContainerList>
    );
  };

  return (
    <Container>
      {renderHeader()}
      {renderData()}
    </Container>
  );
}
