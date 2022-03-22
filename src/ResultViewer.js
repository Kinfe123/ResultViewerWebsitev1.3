import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-ui/core";
import Result from "./Result";

const ResultViewer = () => {
  let [input, setInput] = useState("");
  let [total, setTotal] = useState();
  let [math, setMath] = useState();
  let [chem, setChem] = useState();
  let [eng, setEng] = useState();
  let [stream, setStream] = useState("");
  let [civic, setCivic] = useState();
  let [bio, setBio] = useState();
  let [apt, setApt] = useState();
  let [phy, setPhy] = useState();
  let [name, setName] = useState("");
  let [school, setSchool] = useState("");
  let [gender, setGender] = useState("");
  let [id, setId] = useState("");
  let [his, setHis] = useState("");
  let [geo, setGeo] = useState("");
  let [eco, setEco] = useState("");
  let [ssCount, setSsCount] = useState(0);
  let [passNs, setPassNs] = useState(0);
  let stateNs = false;
  let stateSc = false;
  let [nsPassCounterMale, setNsPassCounterMale] = useState(0);
  let [nsPassCounterFemale, setNsPassCounterFemale] = useState(0);
  let [ssPassCounterMale, setSsPassCounterMale] = useState(0);
  let [ssPassCounterFemale, setSsPassCounterFemale] = useState(0);
  let [nsCounter, setNsCounter] = useState(0);
  let [ssCounter, setSsCounter] = useState(0);
  let [maleNsCounter, setMaleNsCounter] = useState(0);
  let [check, setCheck] = useState(stateNs);
  let [checkForSocial, setCheckForSocial] = useState(stateSc);
  let [passChecker, setPassChecker] = useState([]);
  let [top, setTop] = useState([]);
  let [tops, setTops] = useState([]);
  let [topFemale, setTopFemale] = useState([]);
  let [topFemaleSs, setTopFemaleSs] = useState([]);
  let [passCheckerFemale, setPassCheckerFemale] = useState([]);
  let [btnDis, setBtnDis] = useState("SEE MORE 🔽");
  let [rank, setRank] = useState(0);
  let [remarkNs, setRemarkNs] = useState("");
  let [nsRank, setNsRank] = useState([]);
  let [ssRank, setSsRank] = useState([]);
  let [result, setResult] = useState("");
  // let [result , setResult] = useState({})

  // const calc = () => {
  //   if (stream === "NS") {
  //     let totalValue = math + chem + bio + civic + eng + apt + phy;

  //     setTotal(totalValue);
  //   }
  //   if (stream === "SS") {
  //     let totalValue = math + his + eco + civic + eng + apt + geo;

  //     setTotal(totalValue);
  //   }
  // };
  // useEffect(() => {
  //   calc();
  // }, [input, id]);
  const nsCount = () => {
    let index = 0;
    Result.map((res) => {
      if (res.stream === "NS") {
        index++;
      }
    });
    setNsCounter(index);
  };
  const ssCounted = () => {
    let index = 0;
    Result.map((res) => {
      if (res.stream === "SS") {
        index++;
      }
    });
    setSsCounter(index);
  };
  let filtering = Result.filter((fi) => fi.stream === "SS");

  let topTenSocial = filtering.filter(
    (f) => parseInt(f.total) - parseInt(f.civics) > 320
  );

  const topTens = () => {
    let topArr = [];
    topTenSocial.map((res) => {
      if (res.stream === "SS") {
        if (parseInt(res.total - res.civics) >= 324) {
          topArr.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);
    topTenSocial.map((res) => {
      let index = 0;
      let newTopArr = [];
      for (let i = 0; i < 11; i++) {
        if (parseInt(res.total) === topArr[i]) {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];
          i++;
        }
      }
    });

    setTops(topArr);
  };
  let filteringN = Result.filter((fi) => fi.stream === "NS");

  let topTenNatural = filteringN.filter(
    (f) => parseInt(f.total) - parseInt(f.civics) >= 470
  );

  const topTen = () => {
    let topArr = [];
    topTenNatural.map((res) => {
      if (res.stream === "NS") {
        if (parseInt(res.total - res.civics) >= 470) {
          topArr.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);
    topTenNatural.map((res) => {
      let index = 0;
      let newTopArr = [];
      for (let i = 0; i < 10; i++) {
        if (parseInt(res.total) === topArr[i]) {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];
          i++;
        }
      }
    });
    setTop(topArr);
  };

  //Pass and Fail

  const passNsCheck = () => {
    let topArr = [];
    let topArrFemale = [];
    Result.map((res) => {
      if (res.stream === "NS" && res.gender === "Male") {
        if (parseInt(res.total - res.civics) >= 363) {
          topArr.push(parseInt(res.total));
        }
      } else if (res.stream === "NS" && res.gender === "Female") {
        if (parseInt(res.total - res.civics) >= 351) {
          topArrFemale.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);
    topArrFemale.sort((a, b) => b - a);

    Result.map((res) => {
      let index = 0;
      let newTopArr = [];
      let newTopArrFemale = [];
      for (let i = 0; i < 400; i++) {
        if (parseInt(res.total) === topArr[i] && res.gender === "Male") {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];

          i++;
        } else if (
          parseInt(res.total) === topArrFemale[i] &&
          res.gender === "Female"
        ) {
          newTopArrFemale.push(res.name);
          topArrFemale[i] = newTopArrFemale[index];
          i++;
        }
      }
    });

    setPassChecker(topArr);
    setPassCheckerFemale(topArrFemale);
  };

  //end
  const passSsCheck = () => {
    let topArr = [];
    let topArrFemale = [];
    Result.map((res) => {
      if (res.stream === "SS" && res.gender === "Male") {
        if (parseInt(res.total - res.civics) >= 264) {
          topArr.push(parseInt(res.total));
        }
      } else if (res.stream === "SS" && res.gender === "Female") {
        if (parseInt(res.total - res.civics) >= 254) {
          topArrFemale.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);
    topArrFemale.sort((a, b) => b - a);
    Result.map((res) => {
      let index = 0;
      let newTopArr = [];
      let newTopArrFemale = [];
      for (let i = 0; i < 600; i++) {
        if (parseInt(res.total) === topArr[i] && res.gender === "Male") {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];
          i++;
        } else if (
          parseInt(res.total) === topArrFemale[i] &&
          res.gender === "Female"
        ) {
          newTopArrFemale.push(res.name);
          topArrFemale[i] = newTopArrFemale[index];
          i++;
        }
      }
    });
    setSsPassCounterMale(topArr);
    setSsPassCounterFemale(topArrFemale);
  };

  const topTenFemale = () => {
    let topArr = [];
    Result.map((res) => {
      if (res.stream === "NS") {
        if (
          res.gender === "Female" &&
          parseInt(res.total - res.civics) >= 434
        ) {
          topArr.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);

    Result.map((res) => {
      let index = 0;
      let newTopArr = [];
      for (let i = 0; i <= 19; i++) {
        if (parseInt(res.total) === topArr[i] && res.gender === "Female") {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];
          i++;
        }
      }
    });
    setTopFemale(topArr);
  };

  //ranking soln

  const topTenFemaleSs = () => {
    let topArr = [];
    Result.map((res) => {
      if (res.stream === "SS") {
        if (
          res.gender === "Female" &&
          parseInt(res.total - res.civics) >= 310
        ) {
          topArr.push(parseInt(res.total));
        }
      }
    });

    topArr.sort((a, b) => b - a);

    Result.map((res) => {
      let index = 0;
      let newTopArr = [];
      for (let i = 0; i <= 14; i++) {
        if (parseInt(res.total) === topArr[i] && res.gender === "Female") {
          newTopArr.push(res.name);
          topArr[i] = newTopArr[index];
          i++;
        }
      }
    });
    setTopFemaleSs(topArr);
  };

  // const nsFemaleCounter = () => {
  //   let femaleCounter = 0;
  //   let femaleNumberPass = 0;

  //     Result.map((res)=>{

  //       if(res.stream === "NS"){
  //         if(res.gender === "Female"){
  //           femaleCounter++

  //         }
  //       }
  //     })

  //   setNsFemaleCount(femaleCounter)
  // }

  function checkItForSocial() {
    setCheckForSocial(!checkForSocial);
    if (checkForSocial) {
      setBtnDis("SEE MORE 🔽");
    } else {
      setBtnDis("SEE LESS 🔼");
    }
  }
  // const getResult = (id) => {
  //   Result.map((res)=>{
  //     if(res.id === id){
  //       setResult(res.total - res.civics)
  //     }
  //   })
  // }
  useEffect(() => {
    topTen();
    topTens();
    topTenFemale();
    topTenFemaleSs();
    passNsCheck();
    nsCount();
    passSsCheck();
    ssCounted();
    distEvalForNs();
    distEvalSs();
  }, []);

  const handler = (event) => {
    setInput(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    Result.map((res) => {
      if (input === res.id) {
        if (res.stream == "NS") {
          setName(res.name);

          setId(res.id);
          setSchool(res.school);
          setGender(res.gender);
          setMath(res.math);
          setBio(res.bio);
          setChem(res.chem);
          setEng(res.eng);
          setStream(res.stream);
          setApt(res.apt);
          setCivic(res.civics);
          setPhy(res.phy);
          setTotal(res.total);

          // let totalValue = math + chem + bio + civic + eng + apt + phy;
          // res.total = totalValue;
          // setTotal(totalValue);
        }
        if (res.stream === "SS") {
          setName(res.name);
          setId(res.id);
          setSchool(res.school);
          setGender(res.gender);
          setMath(res.math);
          setGeo(res.geo);
          setEco(res.eco);
          setEng(res.eng);
          setStream(res.stream);
          setApt(res.apt);
          setCivic(res.civics);
          setHis(res.his);

          setTotal(res.total);
        }
      }
    });
  };
  //   function getUnique(array){
  //     var uniqueArray = [];

  //     // Loop through array values
  //     for(let i=0; i < array.length; i++){
  //         if(uniqueArray.indexOf(array[i]) === -1) {
  //             uniqueArray.push(array[i]);
  //         }
  //     }
  //     return uniqueArray;
  // }
  //On maintaince on rank

  let filteringRank = Result.filter((fi) => fi.stream === "NS");

  let rankNatural = filteringRank
    .filter((f) => parseInt(f.total) - parseInt(f.civics) > 0)
    .sort((a, b) => b.total - a.total);
  // console.log(rankNatural);
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const getRank = (total) => {
    let arr = [];
    rankNatural.map((res) => {
      if (parseInt(res.total - res.civics) >= 0) {
        arr.push(parseInt(res.total - res.civics));
      }
    });
    arr.sort((a, b) => b - a);
    console.log(arr);
    return arr.indexOf(total);
  };
  let filteringS = Result.filter((fi) => fi.stream === "SS");

  let rankSocial = filteringS
    .filter((f) => parseInt(f.total) - parseInt(f.civics) > 0)
    .sort((a, b) => b.total - a.total);
  const getRankSs = (total) => {
    let arr = [];
    rankSocial.map((res) => {
      if (parseInt(res.total - res.civics) >= 0) {
        arr.push(parseInt(res.total - res.civics));
      }
    });
    arr.sort((a, b) => b - a);
    console.log(arr);
    return arr.indexOf(total);
  };

  // //Ranking Social
  // const checkRank = (total) => {
  //   let arr = []
  //   Result.map((res )=>{
  //     if(res.stream === "NS"){
  //       arr.push(parseInt(res.total))
  //     }

  //   })
  //   arr.sort((a , b)=> b - a)

  // }

  function checkIt() {
    setCheck(!check);
    if (check) {
      setBtnDis("SEE MORE 🔽");
    } else {
      setBtnDis("SEE LESS 🔼");
    }
  } //Unsolved issue for collapsable
  function distEvalForNs(totalMark) {
    if (totalMark >= 470) {
      return "First class with very distinction";
    } else if (totalMark < 470 && totalMark >= 430) {
      return "First class with distinction";
    } else if (totalMark < 430 && totalMark >= 400) {
      return "First class";
    } else if (totalMark < 400 && totalMark >= 380) {
      return "Second class";
    } else if (totalMark < 380 && totalMark >= 363) {
      return "Lower class";
    } else if (totalMark < 363) {
      return "Lowest class";
    }
  }

  function distEvalSs(totalMark) {
    if (totalMark >= 336) {
      return "First class with very distinction";
    } else if (totalMark < 336 && totalMark >= 316) {
      return "First class with very distinction";
    } else if (totalMark < 316 && totalMark >= 300) {
      return "First class";
    } else if (totalMark < 300 && totalMark >= 280) {
      return "Second class";
    } else if (totalMark < 280 && totalMark >= 264) {
      return "Lower class";
    } else if (totalMark < 264) {
      return "Lowest class";
    }
  }
  function passDetecionNs(gender, total) {
    if (gender === "Male") {
      if (total >= 363) {
        return "PASS ✅";
      } else {
        return "FAIL ⛔";
      }
    } else if (gender === "Female") {
      if (total >= 361) {
        return "PASS ✅ ";
      } else {
        return "FAIL ⛔";
      }
    }
  }
  function passDetecionSs(gender, total) {
    if (gender === "Male") {
      if (total >= 264) {
        return "PASS ✅";
      } else {
        return "FAIL ⛔";
      }
    } else if (gender === "Female") {
      if (total >= 254) {
        return "PASS ✅ ";
      } else {
        return "FAIL ⛔";
      }
    }
  }

  return (
    <>
      <form>
        <Input
          type="number"
          value={input}
          onChange={handler}
          style={{ marginRight: 10 }}
        />
        <Button
          disabled={!(input.length === 6)}
          type="submit"
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          GO{input.length === 6 ? "🚀" : ""}
        </Button>
      </form>
      {id === input && input ? (
        <div style={{ textAlign: "left" }}>
          {stream === "NS" ? (
            <div>
              <h4>ℹ️ STUDENT INFO</h4>
              <p>👤 Name ➡️ {name}</p>
              <p>👫 Gender ➡️ {gender}</p>
              <p>🏫 School ➡️ {school}</p>
              <p>
                🔴 Stream ➡️{" "}
                {stream === "NS"
                  ? "Natural Science"
                  : stream === "SS"
                  ? "Social Science"
                  : "Not defined"}
              </p>

              <p>🆔 ID ➡️ {id}</p>
              <h4>📊 STUDENT RESULT </h4>
              <p>🧮 Math ➡️ {math}</p>
              <hr />
              <p>🧪 Chemistry ➡️ {chem}</p>
              <hr />
              <p>🧬 Biology ➡️ {bio}</p>
              <hr />
              <p>📝 English ➡️ {eng}</p>
              <hr />
              <p>🪐 Physics ➡️ {phy}</p>
              <hr />
              <p>📚 Civics ➡️ {civic}</p>
              <hr />
              <p>📋 SAT ➡️ {apt}</p>
              <hr />
              <br />
              <h4> ℹ️ DETAIL INFO</h4>
              <p>
                <b>➖ Total(700)</b> ➡️ {total}
              </p>
              <hr />

              <p>
                <b>➖ Total(No Civics)</b> ➡️ {total - civic}
              </p>
              <hr />

              <p>
                <b>➖ Avarage(100%)</b> ➡️ {total / 7}
              </p>
              <hr />
              <p>
                <b>➖ Status</b> ➡️ {passDetecionNs(gender, total - civic)}
              </p>
              <hr />
              {/* {gender === "M"
                  ? total - civic >= 363
                    ? "Pass ✅ "
                    : "Fail ⛔"
                  : total - civic >= 351
                  ? "Pass ✅"
                  : "Fail ⛔"}
              </p> */}

              <p>
                <b>➖ Remark ➡️</b> {distEvalForNs(total - civic)}
              </p>
              <hr />
              <p>
                <b>➖ Rank </b> ➡️{" "}
                {getRank(total - civic) + 1 === 1
                  ? `${getRank(total - civic) + 1} from Natural
                Science 🥇`
                  : getRank(total - civic) + 1 === 2
                  ? `${getRank(total - civic) + 1} from Natural Science 🥈`
                  : getRank(total - civic) + 1 === 3
                  ? `${getRank(total - civic) + 1} from Natural Science 🥉 `
                  : `${getRank(total - civic) + 1} from Natural Science`}
              </p>
              <hr />
              <p>
                <b>
                  <i>
                    Note that: If you get your rank a little bit down , It is
                    because there were couple or more guys having the same
                    result more than you.{" "}
                  </i>
                </b>
              </p>
              <Button color="primary" variant="contained" onClick={checkIt}>
                {btnDis}
              </Button>
              {check ? (
                <div>
                  <h3> ℹ️ Natural Science Info</h3>
                  <h4> ✅ Top 10 Students from Natural Science by Rank</h4>
                  {top.map((x) => {
                    let i = 1;
                    return (
                      <ul>
                        <p>👤 {x}</p>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              {check ? (
                <div>
                  <h4>
                    {" "}
                    ✅ ♀ Top 15 Female Student from Natural Science by Rank
                  </h4>
                  {topFemale.map((x) => {
                    let i = 1;
                    return (
                      <ul>
                        <p>👤 {x}</p>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              <h4>✅ Pass and Fail Stats For Natural Science</h4>
              <p>
                ➖ Natural Science Students that passed the exam➡️{" "}
                {passChecker.length + passCheckerFemale.length} out of{" "}
                {nsCounter}
              </p>
              <p>- Male Passed ➡️{passChecker.length}</p>

              <p>- Female Passed ➡️ {passCheckerFemale.length}</p>
              <p>
                ➖ Natural Science Percentage Pass(From Natural) ➡️{" "}
                {Math.floor(
                  ((passChecker.length + passCheckerFemale.length) /
                    nsCounter) *
                    100
                )}
                %
              </p>

              <p>
                ➖ Natural Science Percentage Pass(From All students) ➡️{" "}
                {Math.floor(
                  ((passChecker.length + passCheckerFemale.length) /
                    (ssCounter + nsCounter)) *
                    100
                )}
                %
              </p>

              <p>
                🔰 Without being said , Yaberus Wolkite was able to pass about{" "}
                <b>
                  53%(
                  {passCheckerFemale.length +
                    passChecker.length +
                    ssPassCounterFemale.length +
                    ssPassCounterMale.length}
                  )
                </b>{" "}
                of the of grade 12 Students.{" "}
              </p>
            </div>
          ) : (
            <div>
              <h4>ℹ️ STUDENT INFO</h4>
              <p>👤 Name ➡️ {name}</p>
              <p>👫 Gender ➡️ {gender}</p>
              <p>🏫 School ➡️ {school}</p>
              <p>
                🔴 Stream ➡️{" "}
                {stream === "NS"
                  ? "Natural Science"
                  : stream === "SS"
                  ? "Social Science"
                  : "Not defined"}
              </p>

              <p>🆔 ID ➡️ {id}</p>
              <h4>📊 STUDENT RESULT </h4>
              <p>🧮 Math ➡️ {math}</p>
              <hr />
              <p>📜 History ➡️ {his}</p>
              <hr />
              <p>🏔️ Geography ➡️ {geo}</p>
              <hr />
              <p>📝 English ➡️ {eng}</p>
              <hr />
              <p>📈 Economics ➡️ {eco}</p>
              <hr />
              <p>📚 Civics ➡️ {civic}</p>
              <hr />
              <p>📋 SAT ➡️ {apt}</p>
              <hr />
              <br />
              <h4>ℹ️ FURTHER INFO</h4>
              <p>
                <b>➖ Total(600)</b> ➡️ {total}
              </p>
              <hr />

              <p>
                <b>➖ Total(No Civics)</b> ➡️ {total - civic}
              </p>
              <hr />

              <p>
                <b>➖ Avarage(100%)</b> ➡️ {total / 6}
              </p>
              <hr />
              <p>
                <b>➖ Status ➡️ </b> {passDetecionSs(gender, total - civic)}
                {/* {gender === "M"
                  ? total - civic >= 264
                    ? "Pass ✅"
                    : "Fail ⛔"
                  : total - civic >= 254
                  ? "Pass ✅ "
                  : "Fail ⛔"} */}
              </p>
              <hr />
              <p>
                <b>➖ Remark</b> ➡️ {distEvalSs(total - civic)}
              </p>
              <hr />
              <p>
                <b>➖ Rank </b> ➡️{" "}
                {getRankSs(total - civic) + 1 === 1
                  ? `${getRankSs(total - civic) + 1} from Social
                Science 🥇`
                  : getRankSs(total - civic) + 1 === 2
                  ? `${getRankSs(total - civic) + 1} from Social Science 🥈`
                  : getRankSs(total - civic) + 1 === 3
                  ? `${getRankSs(total - civic) + 1} from Social Science 🥉 `
                  : `${getRankSs(total - civic) + 1} from Social Science`}
              </p>
              <hr />
              <p>
                <b>
                  <i>
                    Note that: If you get your rank a little bit down , It is
                    because there were couple or more guys having the same
                    result more than you.{" "}
                  </i>
                </b>
              </p>
              <Button
                color="primary"
                variant="contained"
                onClick={checkItForSocial}
              >
                {btnDis}
              </Button>
              {checkForSocial ? (
                <div>
                  <h3> ℹ️ Social Science Info</h3>
                  <h4> ✅ Top 10 Students from Social Science by Rank</h4>
                  {tops.map((x) => {
                    return (
                      <ul>
                        <p>👤 {x}</p>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              {checkForSocial ? (
                <div>
                  <h4>
                    {" "}
                    ✅ ♀ Top 15 Female Students from Social Science by Rank
                  </h4>
                  {topFemaleSs.map((x) => {
                    return (
                      <ul>
                        <p>👤 {x}</p>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              <h4>✅ Pass and Fail Stats for Social Science</h4>

              <p>
                ➖ Social Science Students that passed the exam ➡️{" "}
                {ssPassCounterFemale.length + ssPassCounterMale.length} out of{" "}
                {ssCounter}
              </p>
              <p>- Male ➡️ {ssPassCounterMale.length}</p>

              <p>- Female ➡️ {ssPassCounterFemale.length} </p>

              <p>
                ➖ Social Science Percentage Pass(From Social Science) ➡️{" "}
                {Math.floor(
                  ((ssPassCounterFemale.length + ssPassCounterMale.length) /
                    ssCounter) *
                    100
                )}
                %
              </p>
              <p>
                ➖ Social Science Percentage Pass(From All Students) ➡️{" "}
                {Math.floor(
                  ((ssPassCounterFemale.length + ssPassCounterMale.length) /
                    (ssCounter + nsCounter)) *
                    100
                )}
                %
              </p>
              <p>
                🔰 Without being said , Yaberus Wolkite was able to pass about{" "}
                <b>
                  53%(
                  {passCheckerFemale.length +
                    passChecker.length +
                    ssPassCounterFemale.length +
                    ssPassCounterMale.length}
                  )
                </b>{" "}
                of the of grade 12 Students.{" "}
              </p>
            </div>
          )}
        </div>
      ) : (
        <p style={{ padding: 20 }}>Nothing to show || Check your reg number</p>
      )}
    </>
  );
};
export default ResultViewer;
