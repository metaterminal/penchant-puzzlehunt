import Image from "next/image";
import LOGIC1 from "./logic1.png";
import LOGIC2 from "./logic2.png";
import LOGIC3 from "./logic3.png";
import LOGIC4 from "./logic4.png";
import LOGIC5 from "./logic5.png";
import LOGIC6 from "./logic6.png";
import LOGIC7 from "./logic7.png";
import LOGIC8 from "./logic8.png";
import LOGIC9 from "./logic9.png";
import GRAPH from "./graph.png";
import GRID from "./letters.png";

/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "pen-paper-logic";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
   <div className="font-medium text-lg/6">
    <div className="max-w-3xl font-medium mb-4 text-center">
      The nine logic puzzles make nine unique solutions.
    </div>
    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Balance Loop</b>
    </div>
    <Image src={LOGIC1} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VXfb6JOEH/3r7jsazf5soBUSe7BWu21X2u11XhKjEGLSgvSQ7A9jP97Zwc9gd02dw9NeskFGcfPzM6vXT+7/hHboUOZwj9ahcI3PDqr4KtWDHyV/dNzI88xv9BaHC2DEBRKb5pNOre9tUOvhstWPag9n9e+byrRaMQulPhSGTw0H05u/f8vXS1kzXalc925dtVF7Vv9rGs0ToxOvO5Hzqbrs7OH/qg37wwWVfVnoz3Sk9GNUr4azf/b1PpfS9a+hnFpm1TNpEuTC9MijFCiwsvImCZdc5tcm8mQJndgIpSNKfFjL3JngReE5IAlrXShCmrjqA7QzrV6CjIF9PZeB3UI6swNZ54zaaVIx7SSHiU89xmu5irxg43Dk/Ha+O9Z4E9dDkztCMa3XrpPhGpgWMf3wWO8d2XjHU1qaQd3v9kBBDl0wNW0A65JOuCNfWwH1fFuB5tzCz1MTIu30z+qlaN6Z25Bts0tKat8KewfS3eQGEYBqCgFgCm4RiNUPyAMF2URA1f9QiAbw5xDyKlxmwo9ZedANB1QyFFAqzJfvSxFT2VomcniYt8CanBfIQKORPA95REEX5yW4FvVZChTpINI5yvCOGQRVqUTYpq0baZJZ8R0eUqdxxaD4EhF77K8QDwKEli638yQbC2cmyaeHhVlDw4xTTSU5ygVlGWULfRpoBygrKPUURroc8r/Bn/0R8ke4A8qx9JS5s8/5b8PG5csuCLIOvAm6zic2zNn4rzYs4iY6S2VteSwVexPHeDYDOQFwZPnrmQRDqYc6C5WQehITRx07hdvheImSahpEN4Xanq2PS/fC97gOSg9vjkoCoHAM7/tMAyec4hvR8sckCH7XCRnVRhmZOdLtB/tQjb/OI5dibwQfC2Nqny//t3nn/g+5xulfDay+mzl4BkPwncI52gswhLaAfQd5slYZfgbJJOxFnGBUXixIqkAKuEVQIvUApDILgAKBAPYGxzDoxZphldVZBqeSiAbnirLN9a49Ao="><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Castle Wall</b>
    </div>
    <Image src={LOGIC2} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VTvb9owEP3OXzH5ay0tTgoLkaYppdC1oxRaECtRhAINkDbBnZPQLoj/vXcOiPyg1fahUidNwcflnf3uzo5f+Ct2hEuZgj9Np/APzzHT5VD1mhzK9ul7ke8an6gZRwsuwKH0qtWiM8cPXXpxu2g3uPl0av5c6dFoxM6U+FwZ3rfuj66DH+eeJliro3cvu5eeOje/N056teZRrRuHg8hd9QJ2cj8Y9Wfd4byu/m52RsfJ6EqpXoxmn1fm4GvF2tZgV9ZJ3Uh6NDkzLMIIJSoMRmya9Ix1cmkkHZrcQIhQZlMSxH7kTbnPBdlhSTtdqILb3LtDGUevkYJMAb8DPiTAZbfgpts1bqdI17CSPiWY+0SuRpcEfOViMqwN36c8mHgITJwIti9ceI+EahAI4zv+EG+nMntDEzPt4OYPOwCSXQfoph2gV+xg2yJ2MPXE1H+XDur2ZgOHcw09jA0L2xnsXX3v3hhrsB1jTfQaLv02VqAYPEdgZIpWxrQqYtUcVq0X5gEnk8y3O+Y6FJg9ry15GZb8ZVimKMDA35JZVGn70BJNNGlPpVWkrUrblnOa0g6lbUh7LG1NzvmCm/JX25Zt9J3KsbRUB/JP9d/D7IoFgkFC7o/DWMycqTt2n51pRIxUs7KRHLaMg4kLNy4D+Zw/+t7yEMMulAO9+ZIL92AIQfdu/hoVhg5QTbi4K9T05Ph+vhf5reag9MbnoEjAdc68O0LwpxwSONEiB2Sufo7JXRY2M3LyJToPTiFbsN+OTYU8Ezksjap4Xv/V/QOrOx6U8tHE6qOVI79xLt4QnH2wCB+QHUDfUJ5M9BD+ishkokW8pChYbFlUAD2gK4AWpQWgsroAWBIYwF7RGGQtygxWVVQaTFUSG0yV1RvLrrwA"><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Country Road</b>
    </div>
    <Image src={LOGIC3} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VXbbuJIFHznK1b9Oi2N29eLNA9cR4qSTNiQZRMLIQMmODF4xjZJZMS/T/UFGRsyuy+7ykor8DlFdbvO6XZTzn9swyyiTONfw6XI+JjMFZfu2uLS1GcUF0nk/0bb22KVZgCUfhsM6DJM8ohe3D91es/t1377z8/Wg2HcXS8/PfWGd0+L8R9sqMWfM+06cTdXN71O8ulr+XC1ar9E/ci+ydP5KonCRVg+jC/eks3AfVwtWfdi1XWX4UbLf7gj76Uz/PKlFahGJq1d6fnlkJZf/YAwQomOi5EJLYf+rrzyyz4tbzFEKJtQst4mRTxPkzQjB668lDfqgP0KjsU4R11JMg34WmHAe8B5nM2TaHopmRs/KEeU8NodcTeHZJ2+RLwY743/nqfrWcyJWVhgD/NV/J1QAwP5dpE+b9VUNtnTsi1XcPs3VwCRwwo4lCvg6MwK+ML+2RV4k/0eD+d3rGHqB3w5dxV0K3jr7xCvRWQi3os4EFEXcYSptDRE7ImoiWiJeCnm9P0d0R2d6o5BfB3nwGHAeoVdS2LXorrnSex51NA0gZGBmZrjVNgxcK8jseVAU/EcW67C+IdYStPyqh4s/Gusw72oa9kKm8CqHwv6limxDR1b6djQt5W+zTVln8hVDya/V+nrmGOqugy1dKVj8roKG9gHU9Vl0DeUDt8HJu9FBpb9IAPL+cjAsn9kYFkXGVj2iQwsaxkadDSlozFg+SyQgVUtDfraQR/zdaWpQ9OUvSFTQ+2V6EGtCxlzlA72wRD7gIMwFsehK6Ipoi2OicPP2798Iv+yncCQPlv/WP89btIK4MUkT5Npvs2W4TyaRm/hvCC+fCccj9S4zXY9i2BmR1SSpt+TeHNO4TBUI+PHTZpFZ4c4GS0e35PiQ2ekZmm2aPT0GiZJfS3ifVmjpJnWqCKDUx79DrMsfa0x67BY1YgjV60pRZvGZhZhvcXwOWxUW1fbsW+RNyKuAJ7Bn9f/L84P/OLkD0r7aGb10doRZzzNfmE41WCTPmM7YH/hPEej5/h3TOZotMmfOApv9tRUwJ7xFbBNawF16i4gTwwG3Dsew1WbNsO7ajoNL3ViNrzUsd8Ek9ZP"><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Geradeweg</b>
    </div>
    <Image src={LOGIC4} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7ZVrb9pKEIa/8yuq/ZqV6rW5OJaOKkIgJynhkoA4wULIEANObJz6QlIj/ntmxyDsXSfVURWpVSvwMjx7mZ134d3wW2wFNmUKf2s6hU94lZmOj6pX8VH2r4ETubbxidbjaOUHEFDabbXownJDm17drdoNv/58Xv9vo0fjMbtQ4ktl9NB6OLnxvl46WsBaHb133bt21GX938ZZv9o8qfbicBjZm77Hzh6G48GiN1qeqt+bnXE5GXeVytV48XlTH/5TMvd7mJS2yamR9GlyYZiEEUpUeBiZ0KRvbJNrI+nQ5Ba6CK1OKPFiN3LmvusHBBmDce10ogph8xiOsJ9HjRQyBeLOPobwDsK5E8xde9pOSc8wkwElPPcZzuYh8fyNzZPxvfHvc9+bORzMrAjkC1fOE6EadITxvf8Y74eyyY4m9bSC20MFkOS9CmCRQwU8TCvgUUEFvLCPreB0stvB4dxADVPD5OUMj6F+DG+NLbQdY0s0xqd+ga2kJ0g0XQBlBHDCB1DThBG1sgB0RZiiY5ZyBtTEKWJapuCQzBzGxDyMVYRETJXW0cRUrIKEH86BVPMrgzYMFbo7KAQ8d2qpTBJFrSSKgsmU55QoSifTwj2giDIt3EMqp4xR0wLMhZUxqitjlFjGqLOMUWwBg9YtVFzFdgA/U5po2J5jq2BbwbaNY5rYjrBtYFvGtopjavyH/r/+CtlD/6DtmFrq7flX5fdjk5IJlwAJfXcaxsHCmttT+8WaR8RI76FsT46tY29mg4tmkOv7T66zLlrh0JWDznLtB3ZhF4f2/fKtpXhXwVIzP7gX9vRsuW6+Fryjcyj9+eZQFIBFZ75bQeA/54hnRascyNh5biV7LYgZWfktWo+WkM07yrErkReCj6lRlZ/X3xv7F76x+UEpP3lvMxUv3Sz50a2WdPfTMOCjk+6fYcSpdfnBO+517BRxgYcBfcfGMr1F/A3HyvSKXLInvlnZoYAWmBRQ0acAyVYFUHIrYG8YFl9V9Cy+K9G2eCrJuXiqrHmZk9Ir"><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Koburin</b>
    </div>
    <Image src={LOGIC5} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VRdb+I6EH3nV6z8WktNCLAhUrXis1LVsmVLl20jhAyYktbgNh9tFcR/74wNSxzSal/2qldaGY+HM86ZGTs50VPCQk5tC3+OS2GFUbFdNctuTU1rOwZBLLj3hTaSeCFDcCj93u3SORMRp2c39832Q+Ol0/h1XL11nOve/Oi+3b++nw1/2n0rOA6tnnBXF5ftpjg6TW8vFo1n3uG1y0hOF4KzGUtvh2evYtV17xZzu3W2aLlztrKiJ3dQf272T05K/raQUWmd1r20T9NTzyc2oaQM0yYjmva9dXrhpT2aXkGI0MqIkmUi4mAqhQyJwmzYd64fLIPb2btDFUevpUHbAr+nfaBKb8CdBuFU8PG5Jrr0/HRACeZuqqfRJUv5zDEZ1ob/p3I5CRCYsBjOMFoEj4Q6EIiSmXxItlvt0YamDd3B1a4DSPJRB0Cy6wBd3QF6BR1gY3+3g/pos4HL+QE9jD0f27neu+7evfLWxCkTr0KJU1NLzVJLXYO25ejVqeq1WtdrDXEg6G0J9M3oy1dUBoCkPvm2B5DeAFQiH9+f3wimNPdgcoNXleETa4dAQba3BnujbFfZsrIDaJimjrJtZS1lq8qeqz0dZYfKtpStKFtTe77ikf3hoeqT+Q/K8R0tFeao/v+wUckHOSGRFOMoCedsysf8lU1j4mlZy0YMbJUsJxy+xwwkpHwUwaqIYRcywOBuJUNeGEKQz+7eo8JQAdVEhrNcTS9MCLMXJfkGpPXAgOIQPvbMfxaG8sVAlixeGEBGGAwmvsodZszMEtkDy2Vb7o9jUyKvRE3foWW8r3/a/4m1Hy/K+mxi9dnKUe+4DD8QnH0wDxfIDqAfKE8mWoS/IzKZaB4/UBQs9lBUAC3QFUDz0gLQoboAeCAwgL2jMcialxmsKq80mOpAbDBVVm/8UekN"><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Masyu</b>
    </div>
    <Image src={LOGIC6} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7ZXbTuM8EMfv+xSffIsl4qQtaSQuekRC0KVL2W6JospNXRpwa8gBUKq+O2OnqDkY9GklJFZapZ5OfuOMZ+zon+gpoSHDxJA/y8bwD1ed2GqYdlMNY3+Ng5gz5z/cTuKVCMHB+MdggJeURwyfT+87vYf2S7/9+7hxa1k3w+XRfW90c7+Y/CIjIzgOjSG3N5dXvQ4/OktvL1ftZ9ZnzatI+CvO6IKmt5PzV74Z2HerJemer7r2km6M6Mket547o9PTmrsvxKtt05aTjnB65riIIIxMGAR5OB052/TSSac4vYYQwsTDaJ3wOPAFFyF6Z+lF9qAJbv/gTlRcet0MEgP84d4HdwquH4Q+Z7OLjFw5bjrGSK7dUU9LF63FM5OLydrkvS/W80CCOY1hD6NV8IiwBYEoWYiHZD+VeDuctrMOrv9nB5DkvQPpZh1IT9OBbOxrO2h5ux0czk/oYea4sp2bg2sf3GtnC3aoLFF26mxRvQ5pCKyVrw/Vm1p6oqNNC6hZoQ0t1eY9MXVzbVs3tyXzVigxZOJKCkK03RFTWzIxW9rZdT1uED3WVAJ7PVA7bio7hgPBqaVsT1lD2YayF2pOX9mJsl1l68o21ZwTeaR/fOhfVI5rZVJWvBp/H/NqLsgdigSfRUm4pD6bsVfqx8jJZDcfKbBNsp4z0Isc4kI88mCjy/AeKsDgbiNCpg1JyBZ3H6WSIU2quQgXpZpeKOfFXtQnqYCy17eA4hDEKHdPw1C8FMiaxqsCyAlXIRPblDYzpsUS6QMtrbY+bMeuhl6RGq6FTXle/75N3/jbJA/K+G5i9d3KUe+4CD8RnEOwjDWyA/QT5clFdfwDkclFy7yiKLLYqqgA1egK0LK0AKqqC8CKwAD7QGNk1rLMyKrKSiOXqoiNXCqvN65XewM="><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Moonsun</b>
    </div>
    <Image src={LOGIC7} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VXfb9pIEH7nrzjta1c6764NtqV7IGnotZdQaIg4sBByiJM4tdmef5CeEf97Z9ZG+MemV1X3kJNOxsPMN97Z+Watz+lfuZ8ElBn4EzaFf7hMZqub2311G9U1C7MocH+hwzx7lAk4lH4cjei9H6UB/bB4vDyXw+e3wz93drZcsndG/t6YP42e3nyK/3gfioSNxvbkanIV8ofh7+dn0/7Fm/4kT2+yYDeN2dnTzXJ2P5k/OPzvi/HSLJYfDevD8v7X3fDmt55X9bDq7QvHLaa0eOd6hBFKONyMrGgxdffFlVssaHENKULZipI4j7JwIyOZkCNWXJYLObgXlYvwXD2A6HmJMgP8ceWDuwA3zbfrWMptiUxcr5hRgpufqdXokljuAtwNm8N4I+PbEIFbP4P5pY/hF0IFJNL8Tn7Oq0fZ6kCLYUnh+gcpQJEjBXRLBuhpGCAxZLAJk00UrC//fQbO6nCA0/kEHNauh3RuTq59cq/dPdixskzZhbsnwoAyDEvWJkwEB5R3UKFF+1rU0aEDfLazm8N0KDOwRBcWpq4yE5Ye1nbHzIEWtrTTYJa2bWZpOMJYR2q4XNkZzJ4WQtm3yhrKWspeqmcu1DFwKhhsw2EbcKjAg1GBAIUwgbMKTJMKyy4DbtsU1lUB6gYemwoEp9ysqoFDeb+qBg7lg6oaOKAztWrcBkZl4FDuHNc4sAbPqOzNqjcK7TAYfBkICI6NYsBhyCrgA6BwLGAyoKDWAPe5msC5sqayfTWZAb6zP/1W/9wh/GM7HhwF6nTzsv572KrngaCTVEbrNE/u/U2wDr76m4y45Telnmlg2zy+DUAQa1Ak5Zco3OoqHFMNMHzYyiTQphAM7h5eKoUpTalbmdy1enr2o6jJRX1vG1ApyA0oS0Bta7GfJPK5gcR+9tgAasrcqBRsW8PM/GaL/me/tVt8GsehR74SdXuCcjyv/7++r/nriydlvDa1em3tqJdcJt9RnFOyDWt0B9DvSE8tq8NfUJlato13JAWb7aoKoBphAbStLQB15QXAjsIA9oLIYNW2zmBXbanBrTpqg1vVBcdb9b4B"><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Slalom</b>
    </div>
    <Image src={LOGIC8} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VVtT+JAEP7Or7jsVyexS18oTfzAq4lBTk48ThtCChSpFqp9UVPCf3dmtx5tQeN9uMRLLtDZ2WeWmWem9Gn0mDihC1yhr2oCrvjRuCmuqmmIS8k+Qy/2XesbNJJ4GYToAHzvdmHh+JELZ9d3zfZ947nT+HWs36jqVX9xdNceXN3NRz/5QPGOQ6Xvm+vzi3bTPzpNb86XjSe34xoXUTBb+q4zd9Kb0dmLv+6at8sFb50tW+bCWSvRozmsPzUHJycVOyMyrmzSupUOID21bMYZsCpenI0hHVib9NxKe5BeYoiBNga2SvzYmwV+EDKBcTzXkz/kKvod6VfRHYkD5LWyAwr6/cxH9xrdmRfOfHfSk8iFZadDYFS8KX5NLlsFTy5VI3K0nwWrqUfA1IlxiNHSe2CAxVmUzIP7JDvKx1tIG7KFy7cWsMhHLeQ6IFd2QN6BDqixv9tBfbzd4t35gT1MLJvaudq55s69tDZMrTJLA6YaYjEUsdQlyBVVrqouV70uV4NwTNDHBFw3qayGbYjbjzC3NmivfwcxkG8WY11xoirsEMlAqgrbFlYRVhe2h1k0A4gYV5FnFTSkSi6yA85r2YbX8H/Es42KD5CGnMVG00EQlxHcaG8brQ6iFZHYAD2roStgaNI1NKhhB+TWTKCxcBUpdwTxkbAtYTVhDUG5RtP95PzlEPMz+9PpfJKOrUpZKX5wGv8aNq7YKD0sCvxJlIQLZ+ZO3BdnFjNLSmA+UsDWyWrq4qObg/wgePC99aEMb6EC6N2ug9A9GCLQnd++l4pCB1JNg3Be4vTs+H6xF/F6KEDyaSpAcYi6kNs7YRg8F5CVEy8LQE5DCpncdWmYsVOk6Nw7pWqr3Ti2FfbCxGWrUKX79f898ZXfE3SnlK+mVl+NjviTB+EHirMLluEDuoPoB9KTix7C31GZXLSM70kKkd1XFUQPCAuiZW1BaF9eENxTGMTeERnKWtYZYlWWGiq1pzZUKi849rjyCg=="><u>(Link to penpa version.)</u></a>
    </div>

    <div className="max-w-3xl font-medium mb-4 text-center">
      <b>Yajilin</b>
    </div>
    <Image src={LOGIC9} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VVbb9pMEH3nV1T7mpXqC1CwVFWEQJqUEEhANFiWZYgBJzab+kLyGfHfMzMLwjYk6ks/pVJldnY4sz4zs2sfR78SJ3S5quBPr3GY4SqrNRparUpD2V4DL/Zd4xNvJPFChOBwft1u85njRy6/vFt0mqLxfNb4uarF47F6riQXyuih/XByE/y48PRQbXdrvavelafNG9+bp/1q66TaS6Jh7K76gXr6MBwPZr3RvK791+qOy+n4WqlcjmefV43h15K5rcEqrdO6kfZ5em6YTGWcaTBUZvG0b6zTKyPt8vQWQoyXLc6CxI+9qfBFyAhTYV1H3qiB29q7I4qj15SgqoDfBR8SAFV6B+7UC6e+a3ckUc8w0wFnmPuU7kaXBWLlYjKsDf9PRTDxEJg4MWxftPCeGNchECX34jHZLlWtDU8bsoPbXQeQ5L0OgGTXAbqyA/SKHWxb/LMd1K3NBg7nBnqwDRPbGe7d2t69NdZM15hR5kyv0lRVaKpLUFV0OesVOVfqcq4iDgTdLQFktfFs8BGAYpDMZLqt7yEkxlUZCJOY7JsNBe8gSohYhoySm0yxlQyGhcDjkMOwqBwfFKgaa7B3ZNtkNbID2ACe6mTPyCpkK2Q7tKZFdkS2SbZMtkprvuAW/uYmy536H8oxdaka+avy92FWyQR5YZHw7SgJZ87Utd0XZxozQypcNpLDlkkwceH9zEC+EE++tzzGsAvlQG++FKF7NISgez9/iwpDR6gmIrwv1PTs+H6+F1L/HCT1IQfFIbz8mf9OGIrnHBI48SIHZIQix+QuC5sZO/kSnUenkC3Yb8emxF4YDVPnGp7Xv2/BB/4W4EEpH02sPlo59IyL8B3B2QeL8BHZAfQd5clEj+FviEwmWsQPFAWLPRQVQI/oCqBFaQHoUF0APBAYwN7QGGQtygxWVVQaTHUgNpgqqzemVXoF"><u>(Link to penpa version.)</u></a>
    </div>

    <Image src={GRAPH} alt="" className="max-w-xl my-14 mx-auto" />
    <Image src={GRID} alt="" className="max-w-xl my-4" />
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */
export const solutionBody = null; /*(
  <div className="max-w-3xl">This is the solution.</div>
);*/

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Josiah Carberry";

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
