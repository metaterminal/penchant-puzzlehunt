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
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7ZVfb+I4EMDf+RQrv9bSxklIIdI9UAq99iilLYiFCKFAA6RNSDd/aDeI797xBI4kdqvdh0o96RQyDL+xxzNjM45+JnboUKbwj1aj8A2Pzmr4qjUDX2X/9N3Yc8xvtJHEqyAEhdKbdpsubC9y6NVo1WkGjZfzxo9NLR6P2YWSXCrDx/bjyZ3/z6WrhazdrfWue9euumz83Ty7NVonRi+JBrGzufXZ2eNg3F/0hsu6+qvVHevp+EapXo0X3zeNwV8Vax/DpLJN62baoOmFaRFGKFHhZWRC01tzm16b6Yim92AilE0o8RMvdueBF4TkwNJONlEFtXVUh2jnWjODTAG9u9dBHYE6d8O550w7GemZVtqnhK99hrO5Svxg4/DFeGz89zzwZy4HMzuG8kUr95lQDQxR8hA8JfuhbLKjaSPL4P43MwAnhwy4mmXANUkGPLHPzaA+2e1gc+4gh6lp8XQGR7V2VO/NLciuuSVVlU+F/WPZDhLDKIGaUgJMwTkaofqBMJyUJwbO+pfAagzXHMGaGrepkFO+DkTTgcIaJVqXjdWrUnoqo1Um84t5C9TgYwUPWBJh7Cn3IIzFaglj65qMMkVaCKZIo8jKLmKsvYhVuRNVWk+mSYvENGlFmS6PROe+RSe4AeLoqjxuPDgSLD0dzJAcBDhlbTxrKso+HHmaaijPUSooqyg7OKaFcoiyiVJHaeCYU/6n+aO/Vf64f1I4lpbdE8Wn+t9jk4oFFwqJAm8aJeHCnjtT59Wex8TM7rS8pcDWiT9zoCPnkBcEz567lnk4mArQXa6D0JGaOHQelu+54iaJq1kQPpRierE9r5gL3vcFlB3fAopDaPe533YYBi8F4tvxqgByV0PBk7MuFTO2iyHaT3ZpNf9Yjl2FvBJ8LY2qfL/+v/2/8O3PN0r5as3qq4WDZzwIP2g4R2MZS9oO0A86T84q4+80mZy1zIWOwoMVmwpQSV8BWm4tgMTuAlBoMMDe6THca7nN8KjKnYYvJTQbvlS+31iTyhs="><u>(Link to penpa version.)</u></a>
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
    <div className="max-w-3xl font-medium mb-4 text-center">
      (To fix an ambiguity, a line segment of the loop is given.)
    </div>
    <Image src={LOGIC4} alt="" className="max-w-xl mb-4" />
    <div className="max-w-3xl font-medium mb-8 text-center">
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7ZVtb9owEMff8ykmv62lxQkPaaRpohS6dpSHFsRKhFCgAdImpAsJ7YL47j1fQCR22q2aKnXSBDHH72zfg+Hv1c/ICmzKFP7WdAqf8CoyHR9VL+Oj7F49J3Rt4xOtRuHCD8CgtN1o0Jnlrmx6cbNo1vzq42n1x1oPh0N2pkTnyuCucXd05X0/d7SANVp657Jz6ajz6rfaSbdcPyp3olU/tNddj53c9Ye9WWcwP1Z/1VvDYjxsK6WL4ezzutr/UjB3OYwKm/jYiLs0PjNMwgglKjyMjGjcNTbxpRE3aXwNLkLLI0q8yA2dqe/6AUHGYF4zWaiCWT+YA/Rzq5ZApoDd2tlg3oA5dYKpa4+bCekYZtyjhMc+wdXcJJ6/tnkwnhv/PvW9icPBxAqhfauF80CoBo5VdOvfR7upbLSlcTWp4HpfAQR5rQLYZF8BN5MKuJVTAS/sfSs4Hm23cDhXUMPYMHk5/YOpH8xrYwNjy9gQjfGlXyGV5ASJpgugiABOeA8qmjCjUhSArghLdIxSTIGKuEQMyxScklrDmBiHsZIQiKnSPpoYipWQ8MPZk3J2Z+gNww7d7DsEPHNqSZskir2SKDZMpjymRLF1Ms3NAZso09wcknbKGHuag3ljZYzdlTG2WMbYZxljswUMvW5gx1Uce/AzpbGG4ymOCo4lHJtwKkzTKNNgJxWm13HRAMcajkUcyzi9wn/zb/pXpM//rZn9YTqmlsh89lX699ioYMJ9QFa+O15Fwcya2mP7yZqGxEiupLQnw5aRN7FBUFPI9f0H11nm7bB3ZaAzX/qBnevi0L6dv7QVd+VsNfGDWyGnR8t1s7XgdZ1ByS85g8IA1Dr13QoC/zFDPCtcZEBK2TM72UuhmaGVTdG6t4Ro3qEd2wJ5IviYGlX5ef2/vD/w5c0PSvnLK5ypeP+mye8uuLi9W4YGnx2330n5PpgQJ9LlB6+o18Ep4hwNA/qKjKW8efwFxUp5RS7JE09WViigOSIFVNQpQLJUAZTUCtgLgsV3FTWLZyXKFg8lKRcPlRYvc1R4Bg=="><u>(Link to penpa version.)</u></a>
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
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/#m=edit&p=7VXdb9pIEH/nrzjta1c6764NtqV7IGnotZdQ0oA4sBByiJM4tdnWH6RnxP/embUR/tj0TtU95KST8TDzG+98Wj+nX3M/CSgz8CdsCv9wmcxWN7f76jaqaxpmUeD+Qod59igTUCj9OBrRez9KA/ph8Xh5LofPb4d/7uxsuWTvjPy9MX8aPb35FP/xPhQJG43tydXkKuQPw9/Pz677F2/6kzydZcHuOmZnT7Pl9H4yf3D4XxfjpVksPxrWh+X9r7vh7LeeV9Ww6u0Lxy2GtHjneoQRSjjcjKxoce3uiyu3WNDiBlyEshUlcR5l4UZGMiFHrLgsD3JQLyoV4bl6ANHzEmUG6ONKB3UBappv17GU2xKZuF4xpQSTn6nTqJJY7gLMhsWhvZHxbYjArZ/B/NLH8AuhAhxpfic/59WjbHWgxbBs4eYftgBBji2gWnaAmqYDbAw72ITJJgrWl/9+B87qcIDtfIIe1q6H7cxOqn1Sb9w9yLGSTMmFuyfCgDAMQ9YmTAQHlHdQoUX7WtTRoQN8tpPNYTqUGRiiCwtTF5kJSw9rq2PmQAtb2mkwS1s2s7Q9sr5mTDDtkZo5V3IKK6GFUPKtkoaSlpKX6pkLtR1OBYPsHLKDQgXuSxkCiMOEUSjDNKmw7NLgtk3hXGUgneA2lSE45WYVDRTK+1U0UCgfVNFAAfqpReM2NFoaDuXO8YwDZ3B1ZW1WvVAoh8E+SkOAcSwUDQ6zVwYfQAvHACaDFtQZ6H2uJnCupKlkX01mgK/yT7/sP7eEvy3Hg1UgfTcv67+HrXoe8DxJZbRO8+Te3wTr4Ju/yYhbfmrqnga2zePbAHiyBkVSfonCrS7C0dUAw4etTAKtC8Hg7uGlUOjShLqVyV2rpmc/ipq9qM9wAyp5ugFlCZBwzfaTRD43kNjPHhtAjbAbkYJta5iZ3yzR/+y3ssWncRx65BtRtycox339/1F+zR9l3JTx2tjqtZWjXnKZ/IBxTs42rOEdQH9APTWvDn+BZWreNt6hFCy2yyqAaogF0Da3ANSlFwA7DAPYCySDUds8g1W1qQZTddgGU9UJx1v1vgM="><u>(Link to penpa version.)</u></a>
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

    <div className="max-w-xl font-medium mb-8 text-center">
      Consider cells that are unused in the loop twice, and only twice.
    </div>
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
