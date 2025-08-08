import React, { CSSProperties } from 'react';
import { cn } from "~/lib/utils";

export enum Colors {
  C1 = 'red',
  C2 = 'orange',
  C3 = 'yellow',
  C4 = 'palegreen',
  C5 = 'cyan',
  C6 = 'plum',
  C7 = 'black',
  C8 = 'CornflowerBlue',
  C9 = 'lightgray',
  C10 = 'indianred',
  C11 = 'Plum',
  C12 = 'blue',
}

type Cell = number | string | React.ReactElement;

export const _ = '';

interface Props {
  data: Cell[][];
  lightBorder?: boolean;
  dashed?: boolean;
  shading?: (Colors | '' | string)[][];
  noBorder?: boolean[][];
  classNames?: string[][];
  className?: string;
  cellWidth?: number;
  cellHeight?: number;
}

const Grid: React.FunctionComponent<Props> = ({
  data,
  lightBorder = false,
  dashed = false,
  shading = null,
  noBorder = null,
  className = '',
  classNames,
  cellWidth = 30,
  cellHeight = 30,
}) => {
  // Base styles for the table
  const tableStyle: CSSProperties = {
    borderCollapse: 'collapse',
    textAlign: 'center',
  };

  // Base styles for cells
  const baseCellStyle: CSSProperties = {
    backgroundClip: 'padding-box',
    border: lightBorder ? '2px solid white' : '2px solid black',
    borderStyle: dashed ? 'dashed' : 'solid',
    height: `${cellHeight}px`,
    width: `${cellWidth}px`,
    position: 'relative',
    padding: 0,
  };

  return (
    <div className={cn(className)}>
      <table style={tableStyle} cellSpacing={0}>
        <tbody>
          {data.map((row, i) => (
            <tr key={`row-${i}`}>
              {row.map((cell, j) => {
                // Clone base cell styles
                const cellStyle: CSSProperties = { ...baseCellStyle };
                
                // Apply shading if provided
                if (shading?.[i]?.[j]) {
                  cellStyle.backgroundColor = shading[i][j];
                }
                
                // Remove border if specified
                if (noBorder?.[i]?.[j]) {
                  cellStyle.border = '';
                }

                return (
                  <td
                    key={`cell-${i}-${j}`}
                    style={cellStyle}
                    className={classNames?.[i]?.[j] || ''}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;