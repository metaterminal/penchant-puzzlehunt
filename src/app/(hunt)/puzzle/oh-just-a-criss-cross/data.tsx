/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "oh-just-a-criss-cross";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */

import Grid from "~/app/(hunt)/puzzle/components/puzzle/grid"
import { Answerize, Monospace } from "../components/puzzle/monospace";

const lt = '⇦'
const rt = '⇨'
const up = '⇧'
const dn = '⇩'

const Circle = ({ children }: { children?: React.ReactNode }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: '',
      border: '2px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    }}
  >
    {children}
  </div>
);

const sc = "rgba(255, 255, 255, 0.1)";

const G1_content = [
['','','','','','','','','','','',dn,'','','','','','','','',''],
['','','','','','','','','','',rt,'','','','','','','','','',''],
['','','','','','','','','','','',<Circle></Circle>,'','','','','','','','',''],
['','','','','','','','','','','','','',dn,'','','','','','',''],
['','','','','','','','','',dn,'','','',<Circle>{rt}</Circle>,'','','','','','',''],
['','','','','','','','',rt,'','','','','','','','',lt,'','',''],
['','','','','',dn,'','','','','','','','','',<Circle></Circle>,'','','','',''],
['','','','','','','','','','','','','','','','','','','','',''],
['','','','','','','','',<Circle></Circle>,lt,'','','','',rt,up,'',dn,<Circle></Circle>,'',''],
['','','','','','','','','','','','','','','','','','','','',''],
['','','','',<Circle></Circle>,'',lt,'','','','','','',dn,'','','','',lt,'',''],
['','','','','','','','','','','','','',lt,'','','',<Circle></Circle>,'','',''],
['','','',lt,'','','','','','','',up,'','','','','','','','',''],
['','','','','','','','','','','','','','','','','','','','',''],
['','',rt,up,'','',dn,'','','','','',rt,'','','','','','','',<Circle></Circle>],
['','','','','','','','','','','','','','','','','','','','',''],
['','','','',dn,'','','','','','','','','','',<Circle>{up}</Circle>,'','',<Circle></Circle>,'',''],
['','','','',rt,'','','','','','','','','','','','','',up,'',''],
['','','','','','','','','','','','','','','','','','','','',''],
['','','','',<Circle></Circle>,'','','','','','','','','','','','','','','',''],
]

const G1_noBorder = [
[true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,true,true,false,false,false,true,true,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,true,false,true,false,true,false,false,false,true,true,true,true,true],
[true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,false,false,false,true,true,true],
[true,true,true,true,true,false,true,true,true,false,true,false,true,false,true,false,true,true,true,true,true],
[true,true,true,true,true,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true],
[true,true,true,true,false,false,false,false,false,false,true,false,true,true,false,false,false,false,false,true,true],
[true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true],
[true,true,false,false,false,false,false,true,true,true,true,false,true,false,false,false,false,false,false,true,true],
[true,true,true,false,true,false,true,true,true,true,false,false,false,false,true,true,true,false,true,true,true],
[false,false,false,false,true,true,true,true,true,true,true,false,true,false,true,false,true,true,true,true,true],
[true,true,true,false,true,true,true,true,true,true,true,true,true,false,true,false,true,true,false,true,true],
[true,true,false,false,false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,false,false],
[true,true,true,true,true,true,false,true,true,true,true,true,true,false,true,false,true,true,false,true,true],
[true,true,true,true,false,true,false,true,true,true,true,true,true,false,true,false,true,true,false,true,true],
[true,true,true,true,false,false,false,true,true,true,true,true,true,false,true,true,true,true,false,true,true],
[true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
[true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
]

const G1_shade = [
['','','','','','','','','','','',sc,'','','','','','','','',''],
['','','','','','','','','','',sc,sc,sc,'','','','','','','',''],
['','','','','','','','','','','',sc,'','','','','','','','',''],
['','','','','','','','','','','',sc,'',sc,'','','','','','',''],
['','','','','','','','','',sc,'',sc,'',sc,sc,sc,'','','','',''],
['','','','','','','','',sc,sc,sc,sc,sc,sc,'',sc,sc,sc,'','',''],
['','','','','',sc,'','','',sc,'',sc,'',sc,'',sc,'','','','',''],
['','','','','',sc,'','','',sc,'','','','','',sc,'','','','',''],
['','','','',sc,sc,sc,sc,sc,sc,'',sc,'','',sc,sc,sc,sc,sc,'',''],
['','','','','',sc,'','','','','',sc,'','','','','',sc,'','',''],
['','',sc,sc,sc,sc,sc,'','','','',sc,'',sc,sc,sc,sc,sc,sc,'',''],
['','','',sc,'',sc,'','','','',sc,sc,sc,sc,'','','',sc,'','',''],
[sc,sc,sc,sc,'','','','','','','',sc,'',sc,'',sc,'','','','',''],
['','','',sc,'','','','','','','','','',sc,'',sc,'','',sc,'',''],
['','',sc,sc,sc,sc,sc,sc,'','','','',sc,sc,sc,sc,sc,sc,sc,sc,sc],
['','','','','','',sc,'','','','','','',sc,'',sc,'','',sc,'',''],
['','','','',sc,'',sc,'','','','','','',sc,'',sc,'','',sc,'',''],
['','','','',sc,sc,sc,'','','','','','',sc,'','','','',sc,'',''],
['','','','',sc,'','','','','','','','','','','','','','','',''],
['','','','',sc,'','','','','','','','','','','','','','','',''],
]

const G2_content = [
['','','','','','','','','',<Circle>{dn}</Circle>,'','','','','',''],
['','','','','','','','',<Circle>{rt}</Circle>,'','','','','','',''],
['','','','','','','','','','','','','','','',''],
['','','','','',rt,dn,'','','','',<Circle></Circle>,'','','',''],
['','','','','','',<Circle></Circle>,'','','','','','','','',''],
['','','','','','','','','','','',dn,'','','',''],
['','','',rt,<Circle></Circle>,'','','',<Circle>{rt}</Circle>,'','','','','','',''],
['','','','','','','','','','','','','','','',''],
['','','',<Circle>{rt}</Circle>,'','','','',dn,'','',rt,'','','',''],
['',dn,'','','','','','','','','','','','','',''],
[rt,'','','',up,'','','','','','','','',<Circle>{up}</Circle>,'',''],
['','','','','','','','','','','','','','','',''],
['','','','',dn,'',up,'',lt,'','','',dn,'','',''],
['','','','','','','','','','',<Circle></Circle>,'','',lt,'',''],
['','','','','','','','','','','','',<Circle></Circle>,'','',''],
['','','','','','','','','','','','',rt,'','',<Circle></Circle>],
['','','','','','','','','','',<Circle>{dn}</Circle>,'','','','',''],
['','','','','',dn,'','','',rt,'','','','','',''],
['','','','','','','','','','','','','','','',''],
['','','','','',rt,'','',<Circle>{dn}</Circle>,'','','','','','',''],
['','','','','',<Circle></Circle>,'','','','','','','','','',''],
['','','','','','','','','','','','','','','',''],
['','','','','','',rt,'','','','','','','','',''],
['','','','','','','','',<Circle></Circle>,'','','','','','',''],
['','','','','','','','','','','','','','','',''],
['','','','','','','','','','','','','','','',''],
]

const G2_noBorder = [
[true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,false,false,false,true,true,true,true,true],
[true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true],
[true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,true],
[true,true,true,true,false,true,false,true,true,false,true,true,true,true,true,true],
[true,true,true,true,false,true,false,true,true,false,true,false,true,true,true,true],
[true,true,true,false,false,false,false,true,false,false,false,false,false,true,true,true],
[true,true,true,true,false,true,true,true,true,true,true,false,true,false,true,true],
[true,true,true,false,false,false,false,true,false,true,true,false,false,false,false,true],
[true,false,true,true,false,true,true,true,false,true,true,false,true,false,true,true],
[false,false,false,false,false,false,false,true,false,true,true,true,true,false,true,true],
[true,false,true,true,true,true,false,true,false,true,true,true,true,true,true,true],
[true,false,true,true,false,false,false,false,false,true,true,true,false,true,true,true],
[true,true,true,true,false,true,true,true,false,false,false,false,false,false,true,true],
[true,true,true,true,false,true,true,true,true,true,true,true,false,true,true,true],
[true,true,true,true,false,true,true,true,true,true,true,true,false,false,false,false],
[true,true,true,true,true,true,true,true,true,true,false,true,false,true,true,true],
[true,true,true,true,true,false,true,true,true,false,false,false,false,false,true,true],
[true,true,true,true,true,false,true,true,true,true,false,true,false,true,true,true],
[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true],
[true,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true],
[true,true,true,true,true,true,false,false,false,false,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true],
[true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true],
]

const G2_shade = [
['','','','','','','','','',sc,'','','','','',''],
['','','','','','','','',sc,sc,sc,'','','','',''],
['','','','','','','','','',sc,'','','','','',''],
['','','','','',sc,sc,sc,sc,sc,sc,sc,sc,'','',''],
['','','','',sc,'',sc,'','',sc,'','','','','',''],
['','','','',sc,'',sc,'','',sc,'',sc,'','','',''],
['','','',sc,sc,sc,sc,'',sc,sc,sc,sc,sc,'','',''],
['','','','',sc,'','','','','','',sc,'',sc,'',''],
['','','',sc,sc,sc,sc,'',sc,'','',sc,sc,sc,sc,''],
['',sc,'','',sc,'','','',sc,'','',sc,'',sc,'',''],
[sc,sc,sc,sc,sc,sc,sc,'',sc,'','','','',sc,'',''],
['',sc,'','','','',sc,'',sc,'','','','','','',''],
['',sc,'','',sc,sc,sc,sc,sc,'','','',sc,'','',''],
['','','','',sc,'','','',sc,sc,sc,sc,sc,sc,'',''],
['','','','',sc,'','','','','','','',sc,'','',''],
['','','','',sc,'','','','','','','',sc,sc,sc,sc],
['','','','','','','','','','',sc,'',sc,'','',''],
['','','','','',sc,'','','',sc,sc,sc,sc,sc,'',''],
['','','','','',sc,'','','','',sc,'',sc,'','',''],
['','','','','',sc,sc,sc,sc,sc,sc,'','','','',''],
['','','','','',sc,'','',sc,'','','','','','',''],
['','','','','','','','',sc,'','','','','','',''],
['','','','','','',sc,sc,sc,sc,'','','','','',''],
['','','','','','','','',sc,'','','','','','',''],
['','','','','','','','',sc,'','','','','','',''],
['','','','','','','','',sc,'','','','','','',''],
]

export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <div className="grid grid-rows-2 justify-center gap-0 py-10">

      {/* grid 1 */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          <div className="flex justify-center lg:flex-1">
            <Grid 
              data={G1_content} 
              lightBorder={true}
              noBorder={G1_noBorder}
              shading={G1_shade}
            />
        </div>
          <div className="mt-4 lg:mt-0">
            <ul className="space-y-1 list-none">
              <li>1) 47 34 34</li>
              <li>2) 41 40 52</li>
              <li>3) 33 52 38</li>
              <li>4) 42 27 42</li>
              <li>5) 29 47 29 47</li>
              <li>6) 31 47 40 52</li>
              <li>7) 32 41 44 32</li>
              <li>8) 49 47 48 52</li>
              <li>9) 27 42 52 49</li>
              <li>10) 50 52 52 31</li>
              <li>11) 52 36 32 38 34</li>
              <li>12) 45 52 34 34 38</li>
              <li>13) 34 27 37 41 46</li>
              <li>14) 36 47 51 49 38</li>
              <li>15) 37 50 29 47 49</li>
              <li>16) 51 32 41 36 52</li>
              <li>17) 28 52 50 27 28</li>
              <li>18) 39 52 29 50 47</li>
              <li>19) 44 34 27 29 47 34</li>
              <li>20) 48 52 36 50 41 40</li>
              <li>21) 35 37 52 52 49 46</li>
              <li>22) 46 52 40 27 49 30</li>
              <li>23) 38 52 34 34 27 51</li>
              <li>24) 40 27 48 31 27 50 36</li>
              <li>25) 30 50 47 48 47 36 41 40</li>
              <li>26) 43 47 49 41 46 32 41 49 44</li>
            </ul>
          </div>
      </div>

      {/* grid 2 */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
        <div className="flex justify-center lg:flex-1">
          <Grid 
            data={G2_content} 
            lightBorder={true}
            noBorder={G2_noBorder}
            shading={G2_shade}
          />
        </div>
        <div className="mt-4 lg:mt-0">
          <ul className="space-y-1 list-none">
            <li>27) 9 16 13</li>
            <li>28) 17 2 26</li>
            <li>29) 5 11 1 8</li>
            <li>30) 25 10 9 4</li>
            <li>31) 6 2 22 7</li>
            <li>32) 7 1 8 25</li>
            <li>33) 3 8 9 14</li>
            <li>34) 13 2 20 11</li>
            <li>35) 21 15 2 18</li>
            <li>36) 14 2 25 11</li>
            <li>37) 15 8 2 14</li>
            <li>38) 23 1 19 1</li>
            <li>39) 18 9 8 11</li>
            <li>40) 24 10 11 1 20</li>
            <li>41) 2 10 9 8 23</li>
            <li>42) 4 9 2 8 14</li>
            <li>43) 26 1 13 15 11</li>
            <li>44) 19 1 20 5 2 14</li>
            <li>45) 12 1 24 3 11 14</li>
            <li>46) 22 11 22 1 20 11</li>
            <li>47) 1 13 24 9 7 9 13</li>
            <li>48) 20 1 24 7 2 8 11</li>
            <li>49) 8 2 19 7 14 11 10</li>
            <li>50) 10 11 8 11 16 1 13</li>
            <li>51) 16 1 10 20 2 8 19</li>
            <li>52) 11 13 11 4 7 1 8 14</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */
const tableContent1 = [
  { col1: "1) 47 34 34", col2: "ALL" },
  { col1: "2) 41 40 52", col2: "ICE" },
  { col1: "3) 33 52 38", col2: "KEY" },
  { col1: "4) 42 27 42", col2: "POP" },
  { col1: "5) 29 47 29 47", col2: "BABA" },
  { col1: "6) 31 47 40 52", col2: "FACE" },
  { col1: "7) 32 41 44 32", col2: "HIGH" },
  { col1: "8) 49 47 48 52", col2: "NAME" },
  { col1: "9) 27 42 52 49", col2: "OPEN" },
  { col1: "10) 50 52 52 31", col2: "REEF" },
  { col1: "11) 52 36 32 38 34", col2: "ETHYL" },
  { col1: "12) 45 52 34 34 38", col2: "JELLY" },
  { col1: "13) 34 27 37 41 46", col2: "LOUIS" },
  { col1: "14) 36 47 51 49 38", col2: "TAWNY" },
  { col1: "15) 37 50 29 47 49", col2: "URBAN" },
  { col1: "16) 51 32 41 36 52", col2: "WHITE" },
  { col1: "17) 28 52 50 27 28", col2: "XEROX" },
  { col1: "18) 39 52 29 50 47", col2: "ZEBRA" },
  { col1: "19) 44 34 27 29 47 34", col2: "GLOBAL" },
  { col1: "20) 48 52 36 50 41 40", col2: "METRIC" },
  { col1: "21) 35 37 52 52 49 46", col2: "QUEENS" },
  { col1: "22) 46 52 40 27 49 30", col2: "SECOND" },
  { col1: "23) 38 52 34 34 27 51", col2: "YELLOW" },
  { col1: "24) 40 27 48 31 27 50 36", col2: "COMFORT" },
  { col1: "25) 30 50 47 48 47 36 41 40", col2: "DRAMATIC" },
  { col1: "26) 43 47 49 41 46 32 41 49 44", col2: "VANISHING" },
]
const tableContent2 = [
  { col1: "27) 9 16 13", col2: "OWL" },
  { col1: "28) 17 2 26", col2: "XIV" },
  { col1: "29) 5 11 1 8", col2: "BEAN" },
  { col1: "30) 25 10 9 4", col2: "DROP" },
  { col1: "31) 6 2 22 7", col2: "FISH" },
  { col1: "32) 7 1 8 25", col2: "HAND" },
  { col1: "33) 3 8 9 14", col2: "KNOT" },
  { col1: "34) 13 2 20 11", col2: "LIME" },
  { col1: "35) 21 15 2 18", col2: "QUIZ" },
  { col1: "36) 14 2 25 11", col2: "TIDE" },
  { col1: "37) 15 8 2 14", col2: "UNIT" },
  { col1: "38) 23 1 19 1", col2: "YAGA" },
  { col1: "39) 18 9 8 11", col2: "ZONE" },
  { col1: "40) 24 10 11 1 20", col2: "CREAM" },
  { col1: "41) 2 10 9 8 23", col2: "IRONY" },
  { col1: "42) 4 9 2 8 14", col2: "POINT" },
  { col1: "43) 26 1 13 15 11", col2: "VALUE" },
  { col1: "44) 19 1 20 5 2 14", col2: "GAMBIT" },
  { col1: "45) 12 1 24 3 11 14", col2: "JACKET" },
  { col1: "46) 22 11 22 1 20 11", col2: "SESAME" },
  { col1: "47) 1 13 24 9 7 9 13", col2: "ALCOHOL" },
  { col1: "48) 20 1 24 7 2 8 11", col2: "MACHINE" },
  { col1: "49) 8 2 19 7 14 11 10", col2: "NIGHTER" },
  { col1: "50) 10 11 8 11 16 1 13", col2: "RENEWAL" },
  { col1: "51) 16 1 10 20 2 8 19", col2: "WARMING" },
  { col1: "52) 11 13 11 4 7 1 8 14", col2: "ELEPHANT" },
];


export const solutionBody = null; /*(
  <div className="max-w-3xl space-y-4">
    <p>Each set of "clues" is self-referential to the other set, but using only the first letters. 
      Therefore this turns into a cryptogram, treating the replaced letters as a substitution cipher.</p>
    <p className="text-center"><b>Set 1</b></p>
    <div className="flex justify-center">
      <table className="table-auto border-collapse border">
        <thead>
          <tr>
            <th className="border-2 px-4 py-2 text-left">Clue</th>
            <th className="border-2 px-4 py-2 text-left">Answer</th>
          </tr>
        </thead>
        <tbody>
          {tableContent1.map((row) => {
            // Match the first number after ') '
            const match = row.col1.match(/\)\s*(\d{1,2})/);
            let before = row.col1;
            let redNumber = '';
            let after = '';

            if (match) {
              const startIndex = match.index! + 2; // position after ') '
              redNumber = match[1] ?? '';
              before = row.col1.slice(0, startIndex);
              after = row.col1.slice(startIndex + redNumber.length);
            }

            return (
              <tr key={row.col1}>
                <td className="border px-4">
                  <span className="text-red-500">{before}</span>
                  <span className="text-yellow-500">{redNumber}</span>
                  {after}
                </td>
                <td className="border px-4">
                  <span className="text-red-500">{row.col2[0]}</span>
                  {row.col2.slice(1)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    <p className="text-center"><b>Set 2</b></p>
    <div className="flex justify-center">
      <table className="table-auto border-collapse border">
        <thead>
          <tr>
            <th className="border-2 px-4 py-2 text-left">Clue</th>
            <th className="border-2 px-4 py-2 text-left">Answer</th>
          </tr>
        </thead>
        <tbody>
          {tableContent2.map((row) => {
            // Match the first number after ') '
            const match = row.col1.match(/\)\s*(\d{1,2})/);
            let before = row.col1;
            let redNumber = '';
            let after = '';

            if (match) {
              const startIndex = match.index! + 2; // position after ') '
              redNumber = match[1] ?? '';
              before = row.col1.slice(0, startIndex);
              after = row.col1.slice(startIndex + redNumber.length);
            }

            return (
              <tr key={row.col1}>
                <td className="border px-4">
                  <span className="text-yellow-500">{before}</span>
                  <span className="text-red-500">{redNumber}</span>
                  {after}
                </td>
                <td className="border px-4">
                  <span className="text-yellow-500">{row.col2[0]}</span>
                  {row.col2.slice(1)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    <p>The criss-cross grids may then be filled in uniquely in each set.</p>
    <p>GRID 1</p>
    <p>GRID 2</p>
    <p>Highlighted letters at first don't seem to spell much. From the first 
      grid we get <Monospace>MAHEXWNGWOH</Monospace> and from the second 
      we get <Monospace>NXNIICDQKCDZAHH</Monospace>. This is another cryptogram. </p>
    <p>The words between the two sets can be matched to create 26 common phrases. This provides a substitution cipher mapping. </p>
    <p>TABLE</p>
    <p>Using the mapping to convert from Set 1 letters to Set 2 on the first cluephrase, 
      we get <Monospace>UNTAMED WEST</Monospace>. Conversely converting from Set 2 to Set 1 letters on the second cluephrase
      gives <Monospace>ALADDIN PRINCESS</Monospace>. </p>
    <p>Together, this gives the answer <Answerize>WILD JASMINE</Answerize>.</p>

  </div>
);*/

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Olga Vinogradova";

/**
 * The `copyText` should provide a convenient text representation of the puzzle
 * that can be copied to the clipboard. Set this to `null` to remove the copy button.
 */
export const copyText = null;

/**
 * The `partialSolutions` object is used to prompt solutions with significant progress.
 * Each key is a partial solution, and the value is the prompt to be displayed. Keys must
 * be in all caps, no spaces.
 */
export const partialSolutions: Record<string, string> = {};

/**
 * The `tasks` object is used for multi-part puzzles. When a certain answer is submitted,
 * more content will be added to the puzzle body. Keys must be in all caps, no spaces.
 */
export const tasks: Record<string, JSX.Element> = {};
