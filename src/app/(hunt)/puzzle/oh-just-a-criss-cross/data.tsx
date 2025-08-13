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
  <div>
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
            <ul className="space-y-1 text-sm list-none">
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
          <ul className="space-y-1 text-sm list-none">
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
export const solutionBody = (
  <div className="max-w-3xl">This is the solution.
    <div>
      https://docs.google.com/spreadsheets/d/1RBnSORAiOVWfbShoWzE-xizm1WCm8e90BW8oMVAO3Lk/edit?gid=2103069547#gid=2103069547
    </div>
  </div>
);

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
