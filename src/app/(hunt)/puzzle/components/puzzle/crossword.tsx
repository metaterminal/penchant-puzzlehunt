import { cn } from "~/lib/utils";
import React, { CSSProperties } from 'react';

type Cell = number | string | '!' | '';

export const _ = '';
export const X: Cell = '!'; // black
export const Y: Cell = '~'; // cyan
export const Z: Cell = ' '; // lightgray

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

// If possible, use only B, L, and TL. This should be reworked.
export enum Borders {
  L = 'border-left',
  R = 'border-right',
  T = 'border-top',
  B = 'border-bottom',
  BL = 'border-bottomleft',
  BT = 'border-bottomtop',
  TL = 'border-topleft',
  TR = 'border-topright',
  RL = 'border-rightleft',
  TLB = 'border-topleftbottom',
  BLT = 'border-bottomlefttop',
  BRL = 'border-bottomrightleft',
}

interface Props {
  data: Cell[][];
  fill?: (Cell | React.ReactNode)[][];
  shading?: (Colors | '' | string)[][];
  borders?: (Borders | '' | string)[][];
  appendCols?: Cell[]; // Additional columns to prepend to the end without borders.
  emptycells?: boolean;
  cellWidth?: number;
  cellHeight?: number;
  cellClass?: string;
  tableClass?: string;
  className?: string;
  // If true and a cell contains a `/`, will split clue going across/down.
  rebus?: boolean;
  gridColor?: string;
  defaultBorder?: string;
  outerBorderColor?: string | null;
  optimizeForPrint?: boolean;
  overrideValue?: boolean;
  unfilledCellColor?: string | null;
  bgImage?: string | null;
}

const Crossword: React.FunctionComponent<Props> = ({
  data,
  fill = null,
  shading = null,
  borders = null, // Most likely used with barred=true
  appendCols = [],
  emptycells = false,
  cellWidth = 30,
  cellHeight = 30,
  cellClass = '',
  tableClass = '',
  className = '',
  rebus = false,
  defaultBorder = '1px solid lightgray',
  gridColor = 'black',
  outerBorderColor = 'black',
  optimizeForPrint = true,
  overrideValue = false,
  unfilledCellColor = '#fff',
  bgImage = null,
}) => {
  // Base styles for cells
  const getBaseCellStyle = (): CSSProperties => ({
    padding: 0,
    backgroundClip: 'padding-box',
    height: `${cellHeight}px`,
    width: `${cellWidth}px`,
    backgroundColor: unfilledCellColor || '#fff',
  });

  // Content wrapper styles
  const contentWrapperStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '1px',
  };

  // Clue number styles
  const clueStyle: CSSProperties = {
    position: 'absolute',
    width: 'min-content',
    height: '33%',
    textAlign: 'left',
    color: 'black',
    top: 0,
    left: '1px',
    transform: 'scale(0.67)',
    transformOrigin: 'top left',
    fontSize: '20px',
    lineHeight: '1',
  };

  // Value styles
  const valueStyle: CSSProperties = {
    color: 'black',
    position: 'absolute',
    width: '100%',
    height: '67%',
    top: '2px',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Rebus styles
  const rebusStyle: CSSProperties = {
    fontSize: '9px',
    lineHeight: '10px',
    left: '30%',
    position: 'absolute',
    top: '33%',
  };

  const rebusWideStyle: CSSProperties = {
    ...rebusStyle,
    top: '50%',
    left: 0,
  };

  const rebusVerticalStyle: CSSProperties = {
    ...rebusStyle,
    top: '28%',
    transform: 'translateY(-50%)',
    writingMode: 'vertical-lr' as const,
    fontSize: '8px',
    textOrientation: 'upright' as const,
    letterSpacing: '-8px',
    left: '33%',
  };

  return (
    <div
      className={cn('relative', className)}
      style={{
        width: `${data[0].length * cellWidth}px`,
        height: `${data.length * cellHeight}px`,
        aspectRatio: '1/1',
      }}
    >
      {bgImage && (
        <img
          src={bgImage}
          alt="Background image"
          className={cn(
            'absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none'
          )}
          style={{ zIndex: 0, aspectRatio: '1/1' }}
        />
      )}
      <table
        className={cn(
          tableClass,
          'border-collapse mx-auto text-center relative',
          {
            barred: !!borders,
          }
        )}
        cellSpacing={0}
        style={{ zIndex: 1, width: '100%', height: '100%' }}
      >
        <tbody>
          {data.map((row, i) => (
            <tr key={`row-${i}`}>
              {row.map((cell, j) => {
                const value = fill?.[i]?.[j] || '';
                const classes: string[] = [];
                const styles: CSSProperties = getBaseCellStyle();

                if (cell === X) {
                  if (emptycells) {
                    classes.push('empty');
                  } else {
                    classes.push('filled');
                    styles.backgroundColor = gridColor;
                    styles.border = `1px solid ${gridColor}`;
                  }
                } else {
                  const barred = !!borders;
                  const solidBorder = `${barred ? 3 : 1}px solid ${gridColor}`;

                  // if we specified a different outer border color, make it thicker
                  const solidBorderOuter =
                    outerBorderColor == null
                      ? defaultBorder
                      : `${
                          outerBorderColor != 'black' ? 5 : barred ? 3 : 1
                        }px solid ${outerBorderColor}`;

                  if (!barred) {
                    styles.border = solidBorder;
                  } else {
                    // Manually specify borders based on edge or value.
                    styles.border = defaultBorder;
                    if (i === 0) {
                      styles.borderTop = solidBorderOuter;
                    }
                    if (j === 0) {
                      styles.borderLeft = solidBorderOuter;
                    }
                    if (i === data.length - 1) {
                      styles.borderBottom = solidBorderOuter;
                    }
                    if (j === row.length - 1) {
                      styles.borderRight = solidBorderOuter;
                    }

                    // Manual borders should override outer borders
                    const borderValue = borders?.[i]?.[j];
                    if (
                      borderValue === Borders.T ||
                      borderValue === Borders.TL ||
                      borderValue === Borders.TLB ||
                      borderValue === Borders.BLT ||
                      borderValue === Borders.BT ||
                      borderValue === Borders.TR
                    ) {
                      styles.borderTop = solidBorder;
                    }
                    if (
                      borderValue === Borders.L ||
                      borderValue === Borders.TL ||
                      borderValue === Borders.RL ||
                      borderValue === Borders.TLB ||
                      borderValue === Borders.BRL ||
                      borderValue === Borders.BLT ||
                      borderValue === Borders.BL
                    ) {
                      styles.borderLeft = solidBorder;
                    }
                    if (
                      borderValue === Borders.R ||
                      borderValue === Borders.RL ||
                      borderValue === Borders.BRL ||
                      borderValue === Borders.TR
                    ) {
                      styles.borderRight = solidBorder;
                    }
                    if (
                      borderValue === Borders.B ||
                      borderValue === Borders.BRL ||
                      borderValue === Borders.TLB ||
                      borderValue === Borders.BLT ||
                      borderValue === Borders.BL ||
                      borderValue === Borders.BT
                    ) {
                      styles.borderBottom = solidBorder;
                    }
                  }
                }

                // Handle special cell markers
                if (typeof cell === 'string') {
                  if (cell.includes(Z)) {
                    styles.backgroundColor = 'lightgray';
                  }
                  if (cell.includes(Y)) {
                    styles.backgroundColor = 'cyan';
                  }
                }

                // Apply custom shading
                if (shading?.[i]?.[j]) {
                  styles.backgroundColor = shading[i][j];
                }

                // Print optimization for filled cells
                if (optimizeForPrint && classes.includes('filled')) {
                  // This would need to be handled via CSS classes in a real implementation
                  // styles.backgroundImage = `linear-gradient(135deg, ${gridColor} 10%, #fff 10%, #fff 50%, ${gridColor} 50%, ${gridColor} 60%, #fff 60%, #fff 100%)`;
                  // styles.backgroundSize = '7.07px 7.07px';
                }

                const number =
                  typeof cell === 'string'
                    ? parseInt(
                        cell.replace(new RegExp('[' + X + Y + Z + ']', 'g'), ''),
                        10
                      )
                    : cell;

                // Split by '/' for rebuses
                const isRebusCell =
                  rebus && typeof value === 'string' && value.length > 1;
                const [across, down] = isRebusCell
                  ? String(value).split('/')
                  : [value, null];
                const isWide =
                  isRebusCell && (across as string).length > (down?.length ?? 0);

                return (
                  <td
                    key={`cell-${i}-${j}`}
                    className={cn(cellClass, ...classes)}
                    style={styles}
                    data-skip-inline-borders
                  >
                    <div 
                      style={
                        classes.includes('append') 
                          ? { ...contentWrapperStyle, paddingLeft: '40px' }
                          : contentWrapperStyle
                      }
                    >
                      {!Number.isNaN(number) && (
                        <div style={clueStyle}>{number}</div>
                      )}
                      {across && (
                        <div
                          style={
                            !Number.isNaN(number) 
                              ? valueStyle 
                              : { ...valueStyle, height: '100%', top: 0 }
                          }
                          className={cn({
                            value: !overrideValue,
                            rebus: isRebusCell,
                            wide: isWide,
                          })}
                        >
                          <span 
                            style={
                              isRebusCell 
                                ? (isWide ? rebusWideStyle : rebusStyle)
                                : undefined
                            }
                          >
                            {across}
                          </span>
                        </div>
                      )}
                      {down && (
                        <div 
                          style={rebusVerticalStyle}
                          className="value rebus"
                        >
                          {down}
                        </div>
                      )}
                    </div>
                  </td>
                );
              })}
              {appendCols[i] && (
                <td className="append text-left">{appendCols[i]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crossword;
