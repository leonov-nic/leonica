import { PrismaClient } from '@prisma/client';


const mockDetails = [
  {
    "shortName": "95",
    "longName": "10051704",
    "normOfMinute": 6.8,
    "customer": "EWM"
  },{
    "shortName": "418",
    "longName": "5077",
    "normOfMinute": 50,
    "customer": "LH"
  },{
    "shortName": "0",
    "longName": "No details",
    "customer": "0"
  },{
    "shortName": "223",
    "longName": "4474441044",
    "normOfMinute": 15,
    "customer": "EWM"
  },{
    "shortName": "479",
    "longName": "1013 6303 (21012506)",
    "normOfMinute": 46.5,
    "customer": "LH"
  },{
    "shortName": "443",
    "longName": "M222PM0101033",
    "customer": "LH"
  },{
    "shortName": "476",
    "longName": "T221TM0101014",
    "customer": "LH"
  },{
    "shortName": "209",
    "longName": "01731400050",
    "normOfMinute": 13.2,
    "customer": "EWM"
  },{
    "shortName": "7",
    "longName": "01750603260",
    "normOfMinute": 11.2,
    "customer": "EWM"
  },{
    "shortName": "8",
    "longName": "01752502010",
    "normOfMinute": 5.16,
    "customer": "EWM"
  },{
    "shortName": "227",
    "longName": "01782103140",
    "normOfMinute": 10.19,
    "customer": "EWM"
  },{
    "shortName": "308",
    "longName": "10086233",
    "normOfMinute": 12.28,
    "customer": "EWM"
  },{
    "shortName": "303",
    "longName": "10086935",
    "normOfMinute": 12.28,
    "customer": "EWM"
  },{
    "shortName": "451",
    "longName": "10209502",
    "normOfMinute": 11.98,
    "customer": "EWM"
  },{
    "shortName": "452",
    "longName": "10209550",
    "normOfMinute": 11.98,
    "customer": "EWM"
  },{
    "shortName": "475",
    "longName": "1120606064",
    "normOfMinute": 4.1,
    "customer": "EWM"
  },{
    "shortName": "474",
    "longName": "12380505",
    "normOfMinute": 10.16,
    "customer": "EWM"
  },{
    "shortName": "200",
    "longName": "13701001629",
    "normOfMinute": 22.01,
    "customer": "EWM"
  },{
    "shortName": "367",
    "longName": "13706001629",
    "normOfMinute": 20.91,
    "customer": "EWM"
  },{
    "shortName": "82",
    "longName": "13801001639",
    "normOfMinute": 30.13,
    "customer": "EWM"
  },{
    "shortName": "81",
    "longName": "13801002639",
    "normOfMinute": 26.13,
    "customer": "EWM"
  },{
    "shortName": "197",
    "longName": "13806004639",
    "normOfMinute": 13.51,
    "customer": "EWM"
  },{
    "shortName": "201",
    "longName": "15118589",
    "normOfMinute": 8.02,
    "customer": "EWM"
  },{
    "shortName": "47",
    "longName": "1920602661",
    "normOfMinute": 10,
    "customer": "EWM"
  },{
    "shortName": "43",
    "longName": "1930600961",
    "normOfMinute": 8,
    "customer": "EWM"
  },{
    "shortName": "62",
    "longName": "2588746",
    "normOfMinute": 9.4,
    "customer": "EWM"
  },{
    "shortName": "392",
    "longName": "3HAC026771",
    "normOfMinute": 14.5,
    "customer": "EWM"
  },{
    "shortName": "203",
    "longName": "3J029-5007",
    "normOfMinute": 6.72,
    "customer": "EWM"
  },{
    "shortName": "127",
    "longName": "3J036-3875",
    "normOfMinute": 18.59,
    "customer": "EWM"
  },{
    "shortName": "329",
    "longName": "4232233530",
    "normOfMinute": 22.23,
    "customer": "EWM"
  },{
    "shortName": "196",
    "longName": "4252342611",
    "normOfMinute": 8.24,
    "customer": "EWM"
  },{
    "shortName": "119",
    "longName": "4472436502",
    "normOfMinute": 20.68,
    "customer": "EWM"
  },{
    "shortName": "131",
    "longName": "4472498054",
    "normOfMinute": 15.26,
    "customer": "EWM"
  },{
    "shortName": "133",
    "longName": "4472499056",
    "normOfMinute": 9.12,
    "customer": "EWM"
  },{
    "shortName": "183",
    "longName": "4474441015",
    "normOfMinute": 17.09,
    "customer": "EWM"
  },{
    "shortName": "159",
    "longName": "4474441016",
    "normOfMinute": 18.59,
    "customer": "EWM"
  },{
    "shortName": "193",
    "longName": "4474441048",
    "normOfMinute": 18.59,
    "customer": "EWM"
  },{
    "shortName": "180",
    "longName": "4474454158",
    "normOfMinute": 21.363,
    "customer": "EWM"
  },{
    "shortName": "150",
    "longName": "4474455115",
    "normOfMinute": 20.02,
    "customer": "EWM"
  },{
    "shortName": "261",
    "longName": "580-6330/2",
    "normOfMinute": 14.57,
    "customer": "EWM"
  },{
    "shortName": "415",
    "longName": "F625652",
    "normOfMinute": 22.52,
    "customer": "EWM"
  },{
    "shortName": "326",
    "longName": "M222PM400136A",
    "normOfMinute": 19.21,
    "customer": "EWM"
  },{
    "shortName": "445",
    "longName": "M304890010101",
    "normOfMinute": 5.42,
    "customer": "EWM"
  },{
    "shortName": "21",
    "longName": "M404892010050",
    "normOfMinute": 11.48,
    "customer": "EWM"
  },{
    "shortName": "24",
    "longName": "M501150040022",
    "normOfMinute": 6.91,
    "customer": "EWM"
  },{
    "shortName": "487",
    "longName": "M530150010015",
    "normOfMinute": 8.17,
    "customer": "EWM"
  },{
    "shortName": "73",
    "longName": "M725891010011",
    "normOfMinute": 12.3,
    "customer": "EWM"
  },{
    "shortName": "76",
    "longName": "M725891010021",
    "normOfMinute": 12.3,
    "customer": "EWM"
  },{
    "shortName": "358",
    "longName": "TB1061B",
    "normOfMinute": 29.68,
    "customer": "EWM"
  },{
    "shortName": "483",
    "longName": "004062355",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "488",
    "longName": "M222PM010103A",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "373",
    "longName": "2762801",
    "normOfMinute": 10.5,
    "customer": "EWM"
  },{
    "shortName": "314",
    "longName": "4192233410",
    "normOfMinute": 10.36,
    "customer": "EWM"
  },{
    "shortName": "44",
    "longName": "7700105461",
    "normOfMinute": 16.78,
    "customer": "EWM"
  },{
    "shortName": "28",
    "longName": "M530700180100",
    "normOfMinute": 3.27,
    "customer": "EWM"
  },{
    "shortName": "471",
    "longName": "00331 (21012628)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "473",
    "longName": "0332 (21012054)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "460",
    "longName": "1013 6310 (22012507)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "463",
    "longName": "1234 3100 (21012541)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "465",
    "longName": "1434 6163 (21012660)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "455",
    "longName": "1455 1578.10 (22012397)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "470",
    "longName": "1456 1131 10 (22012416)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "466",
    "longName": "1456 1425 10 (22012417)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "477",
    "longName": "1456 1603 10 (21012415)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "469",
    "longName": "1456 1638 10 (22012414)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "30",
    "longName": "14618648",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "467",
    "longName": "14618680 11 (21012582)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "478",
    "longName": "1462 4222 12 (21012583)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "458",
    "longName": "2195 7673 (21012552)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "339",
    "longName": "4041 8262 (21020422)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "456",
    "longName": "41 R 99 2532 H4 (21012502)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "330",
    "longName": "4924515",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "31",
    "longName": "50024400",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "464",
    "longName": "6226",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "472",
    "longName": "ACX4309320",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "325",
    "longName": "GE205002",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "324",
    "longName": "GE287002",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "416",
    "longName": "H218PM0101031/2/A (21012573)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "342",
    "longName": "M1461868011",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "480",
    "longName": "M222PM0101023",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "444",
    "longName": "M737150050053",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "417",
    "longName": "M934152050040",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "468",
    "longName": "RA220 00350598.5/10 (21012606)",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "65",
    "longName": "50025200",
    "normOfMinute": 0,
    "customer": "LH"
  },{
    "shortName": "313",
    "longName": "4252242750",
    "normOfMinute": 18.76,
    "customer": "EWM"
  },{
    "shortName": "169",
    "longName": "01731400040",
    "normOfMinute": 7.6,
    "customer": "EWM"
  },{
    "shortName": "354",
    "longName": "M2AA0M0145020",
    "normOfMinute": 2.4,
    "customer": "EWM"
  },{
    "shortName": "192",
    "longName": "M931860030024",
    "normOfMinute": 5.18,
    "customer": "EWM"
  },{
    "shortName": "482",
    "longName": "41 R 99 2532 H2 (21012494)",
    "customer": "LH"
  },{
    "shortName": "462",
    "longName": "3259",
    "customer": "LH"
  },{
    "shortName": "461",
    "longName": "1231 3261 RZ",
    "customer": "LH"
  },{
    "shortName": "459",
    "longName": "3501 (21020418)",
    "customer": "LH"
  },{
    "shortName": "457",
    "longName": "84 E 90 1803 H2 (21012522)",
    "customer": "LH"
  },{
    "shortName": "454",
    "longName": "45308 4979 6428 (21012544)",
    "customer": "LH"
  },{
    "shortName": "453",
    "longName": "302 2195 (21012393)",
    "customer": "LH"
  },{
    "shortName": "450",
    "longName": "SI 50284600",
    "customer": "EWM"
  },{
    "shortName": "448",
    "longName": "SI 50252110",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "447",
    "longName": "487 9948-01 (21012328)",
    "customer": "LH"
  },{
    "shortName": "446",
    "longName": "453-9344 (21012463)",
    "customer": "LH"
  },{
    "shortName": "442",
    "longName": "SI 50254410",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "441",
    "longName": "SI 50283910",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "440",
    "longName": "SI 50252010",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "439",
    "longName": "SI 50283410",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "438",
    "longName": "SI 50255110",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "437",
    "longName": "SI 50251510",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "436",
    "longName": "SI 50255010",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "435",
    "longName": "SI 50251610",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "434",
    "longName": "SI 50255700",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "433",
    "longName": "SI 50283310",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "432",
    "longName": "SI 50283020",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "431",
    "longName": "20072930",
    "normOfMinute": 11.06,
    "customer": "EWM"
  },{
    "shortName": "413",
    "longName": "011013488 (21020405)",
    "customer": "LH"
  },{
    "shortName": "412",
    "longName": "01782103440",
    "normOfMinute": 9.66,
    "customer": "EWM"
  },{
    "shortName": "410",
    "longName": "1014 7421",
    "customer": "LH"
  },{
    "shortName": "404",
    "longName": "3HAC021692",
    "normOfMinute": 10.2,
    "customer": "EWM"
  },{
    "shortName": "403",
    "longName": "4212233550",
    "normOfMinute": 24.2,
    "customer": "EWM"
  },{
    "shortName": "398",
    "longName": "ACX 3586650 AP 75",
    "customer": "LH"
  },{
    "shortName": "397",
    "longName": "8000882",
    "normOfMinute": 9.89,
    "customer": "EWM"
  },{
    "shortName": "396",
    "longName": "6010281",
    "normOfMinute": 5.98,
    "customer": "EWM"
  },{
    "shortName": "395",
    "longName": "3HAC062765",
    "normOfMinute": 16.24,
    "customer": "EWM"
  },{
    "shortName": "394",
    "longName": "1130100561",
    "normOfMinute": 6.56,
    "customer": "EW"
  },{
    "shortName": "393",
    "longName": "01727101180",
    "normOfMinute": 15.36,
    "customer": "EWM"
  },{
    "shortName": "391",
    "longName": "GS2503110301",
    "normOfMinute": 8.38,
    "customer": "EWM"
  },{
    "shortName": "390",
    "longName": "4472436676",
    "normOfMinute": 10.2,
    "customer": "EWM"
  },{
    "shortName": "388",
    "longName": "7400603561",
    "normOfMinute": 2.16,
    "customer": "EWM"
  },{
    "shortName": "387",
    "longName": "011013490 (21020406)",
    "customer": "LH"
  },{
    "shortName": "386",
    "longName": "8E-7040",
    "normOfMinute": 17.74,
    "customer": "EWM"
  },{
    "shortName": "385",
    "longName": "5404440",
    "normOfMinute": 19.21,
    "customer": "EWM"
  },{
    "shortName": "384",
    "longName": "M222PM0522011",
    "normOfMinute": 13.49,
    "customer": "EWM"
  },{
    "shortName": "383",
    "longName": "M835150200020",
    "normOfMinute": 6.14,
    "customer": "EWM"
  },{
    "shortName": "382",
    "longName": "6003147",
    "customer": "EWM"
  },{
    "shortName": "381",
    "longName": "5402771",
    "normOfMinute": 21.07,
    "customer": "EWM"
  },{
    "shortName": "380",
    "longName": "4232342610",
    "customer": "EWM"
  },{
    "shortName": "379",
    "longName": "11071823",
    "customer": "EWM"
  },{
    "shortName": "378",
    "longName": "M501150150024",
    "normOfMinute": 15.92,
    "customer": "EWM"
  },{
    "shortName": "377",
    "longName": "4212353510",
    "normOfMinute": 20.58,
    "customer": "EWM"
  },{
    "shortName": "376",
    "longName": "7173598",
    "customer": "EWM"
  },{
    "shortName": "375",
    "longName": "PCO-R10002",
    "normOfMinute": 7.48,
    "customer": "EWM"
  },{
    "shortName": "374",
    "longName": "4108403375",
    "normOfMinute": 12,
    "customer": "EWM"
  },{
    "shortName": "372",
    "longName": "M219PM0145601",
    "normOfMinute": 4.62,
    "customer": "EWM"
  },{
    "shortName": "371",
    "longName": "453086424 (21012564)",
    "customer": "LH"
  },{
    "shortName": "370",
    "longName": "H319PM0145600",
    "normOfMinute": 4.27,
    "customer": "EWM"
  },{
    "shortName": "369",
    "longName": "BU 1176519 Pos. 2",
    "normOfMinute": 13.52,
    "customer": "EWM"
  },{
    "shortName": "368",
    "longName": "BU 1176519",
    "normOfMinute": 13.52,
    "customer": "EWM"
  },{
    "shortName": "366",
    "longName": "3437 453084164",
    "customer": "LH"
  },{
    "shortName": "365",
    "longName": "4474453125",
    "normOfMinute": 15.11,
    "customer": "EWM"
  },{
    "shortName": "363",
    "longName": "4472418079",
    "normOfMinute": 10.2,
    "customer": "EWM"
  },{
    "shortName": "362",
    "longName": "4466462083",
    "normOfMinute": 11.25,
    "customer": "EWM"
  },{
    "shortName": "361",
    "longName": "4208",
    "customer": "LH"
  },{
    "shortName": "360",
    "longName": "4530 86422 (21012577)",
    "customer": "LH"
  },{
    "shortName": "359",
    "longName": "2321691",
    "normOfMinute": 13.96,
    "customer": "EWM"
  },{
    "shortName": "357",
    "longName": "17262779",
    "normOfMinute": 10.2,
    "customer": "EWM"
  },{
    "shortName": "356",
    "longName": "20101400",
    "normOfMinute": 30.5,
    "customer": "EWM"
  },{
    "shortName": "353",
    "longName": "2457002002",
    "normOfMinute": 10.02,
    "customer": "EWM"
  },{
    "shortName": "352",
    "longName": "20126600",
    "normOfMinute": 13.3,
    "customer": "EWM"
  },{
    "shortName": "351",
    "longName": "0125504260",
    "normOfMinute": 14.06,
    "customer": "EWM"
  },{
    "shortName": "350",
    "longName": "4254632161",
    "normOfMinute": 15.42,
    "customer": "EWM"
  },{
    "shortName": "347",
    "longName": "GS2003110301",
    "normOfMinute": 4.6,
    "customer": "EWM"
  },{
    "shortName": "344",
    "longName": "GQB1601100102",
    "normOfMinute": 5.36,
    "customer": "EWM"
  },{
    "shortName": "343",
    "longName": "13806010639",
    "normOfMinute": 18.24,
    "customer": "EWM"
  },{
    "shortName": "341",
    "longName": "51897140",
    "customer": "LH"
  },{
    "shortName": "338",
    "longName": "X2001318 (21020419)",
    "customer": "LH"
  },{
    "shortName": "337",
    "longName": "4474452182",
    "normOfMinute": 14,
    "customer": "EWM"
  },{
    "shortName": "336",
    "longName": "17411360",
    "normOfMinute": 14.75,
    "customer": "EWM"
  },{
    "shortName": "335",
    "longName": "10124060",
    "normOfMinute": 10.56,
    "customer": "EWM"
  },{
    "shortName": "334",
    "longName": "10124048",
    "normOfMinute": 10.79,
    "customer": "EWM"
  },{
    "shortName": "333",
    "longName": "BACW1953180",
    "normOfMinute": 7.62,
    "customer": "EWM"
  },{
    "shortName": "331",
    "longName": "17479472",
    "normOfMinute": 13.21,
    "customer": "EWM"
  },{
    "shortName": "328",
    "longName": "4464414287",
    "normOfMinute": 12.17,
    "customer": "EWM"
  },{
    "shortName": "323",
    "longName": "GE84E902030H1",
    "customer": "LH"
  },{
    "shortName": "322",
    "longName": "M501150040012",
    "normOfMinute": 4.78,
    "customer": "EWM"
  },{
    "shortName": "321",
    "longName": "4474441033",
    "normOfMinute": 17.2,
    "customer": "EWM"
  },{
    "shortName": "320",
    "longName": "4474453118",
    "normOfMinute": 13,
    "customer": "EWM"
  },{
    "shortName": "319",
    "longName": "M222PM0145101",
    "normOfMinute": 13.6,
    "customer": "EWM"
  },{
    "shortName": "318",
    "longName": "M222PM0145111",
    "normOfMinute": 13.6,
    "customer": "EWM"
  },{
    "shortName": "317",
    "longName": "V220PM0550010",
    "normOfMinute": 6.5,
    "customer": "EWM"
  },{
    "shortName": "316",
    "longName": "CNH-6303",
    "customer": "LH"
  },{
    "shortName": "315",
    "longName": "M219PM0101020",
    "customer": "LH"
  },{
    "shortName": "312",
    "longName": "GQB1601100301",
    "normOfMinute": 3.52,
    "customer": "EWM"
  },{
    "shortName": "311",
    "longName": "T221TM0140010",
    "normOfMinute": 2.9,
    "customer": "EWM"
  },{
    "shortName": "310",
    "longName": "M501150040141",
    "normOfMinute": 2.1,
    "customer": "EWM"
  },{
    "shortName": "309",
    "longName": "ACW3790940",
    "normOfMinute": 11.08,
    "customer": "EWM"
  },{
    "shortName": "306",
    "longName": "8100215",
    "normOfMinute": 6.7,
    "customer": "EWM"
  },{
    "shortName": "305",
    "longName": "8100212",
    "normOfMinute": 5.7,
    "customer": "EWM"
  },{
    "shortName": "304",
    "longName": "F0110452",
    "normOfMinute": 7.06,
    "customer": "EWM"
  },{
    "shortName": "301",
    "longName": "ACW143692C",
    "normOfMinute": 20,
    "customer": "EWM"
  },{
    "shortName": "300",
    "longName": "4192333410",
    "normOfMinute": 10.89,
    "customer": "EWM"
  },{
    "shortName": "299",
    "longName": "ACW076749B",
    "normOfMinute": 13.78,
    "customer": "EWM"
  },{
    "shortName": "298",
    "longName": "4212252630",
    "normOfMinute": 5.1,
    "customer": "EWM"
  },{
    "shortName": "296",
    "longName": "H218PM4010060",
    "normOfMinute": 5.13,
    "customer": "EWM"
  },{
    "shortName": "295",
    "longName": "M743150050022",
    "normOfMinute": 14.2,
    "customer": "EWM"
  },{
    "shortName": "294",
    "longName": "423223266100R1",
    "normOfMinute": 6.12,
    "customer": "EWM"
  },{
    "shortName": "292",
    "longName": "515 9354 (21012491)",
    "customer": "LH"
  },{
    "shortName": "285",
    "longName": "436 8899 (21012590)",
    "customer": "LH"
  },{
    "shortName": "283",
    "longName": "Cat 1189",
    "customer": "LH"
  },{
    "shortName": "282",
    "longName": "Cat 8634",
    "customer": "LH"
  },{
    "shortName": "280",
    "longName": "419463711100R1",
    "normOfMinute": 11,
    "customer": "EWM"
  },{
    "shortName": "279",
    "longName": "0125504240",
    "normOfMinute": 14.06,
    "customer": "EWM"
  },{
    "shortName": "278",
    "longName": "3672025",
    "normOfMinute": 13.28,
    "customer": "EWM"
  },{
    "shortName": "277",
    "longName": "02149443",
    "normOfMinute": 3.5,
    "customer": "EWM"
  },{
    "shortName": "274",
    "longName": "3HAC045147",
    "normOfMinute": 13.2,
    "customer": "EWM"
  },{
    "shortName": "270",
    "longName": "1140602062",
    "normOfMinute": 5,
    "customer": "EWM"
  },{
    "shortName": "263",
    "longName": "2457001002",
    "normOfMinute": 10.02,
    "customer": "EWM"
  },{
    "shortName": "256",
    "longName": "SI 50259710",
    "normOfMinute": 5.5,
    "customer": "EWM"
  },{
    "shortName": "251",
    "longName": "01727102990",
    "normOfMinute": 7.2,
    "customer": "EWM"
  },{
    "shortName": "248",
    "longName": "4254632171",
    "normOfMinute": 15.11,
    "customer": "EWM"
  },{
    "shortName": "245",
    "longName": "T221TM0140022",
    "normOfMinute": 5.2,
    "customer": "EWM"
  },{
    "shortName": "244",
    "longName": "4212233410/421223340",
    "normOfMinute": 19.1,
    "customer": "EWM"
  },{
    "shortName": "237",
    "longName": "T4N",
    "normOfMinute": 8.11,
    "customer": "EWM"
  },{
    "shortName": "236",
    "longName": "20102200",
    "normOfMinute": 10.01,
    "customer": "EWM"
  },{
    "shortName": "235",
    "longName": "T460N",
    "normOfMinute": 10.56,
    "customer": "EWM"
  },{
    "shortName": "234",
    "longName": "LO4988-3201651",
    "normOfMinute": 4.02,
    "customer": "EWM"
  },{
    "shortName": "233",
    "longName": "H218PM4001011",
    "normOfMinute": 18.21,
    "customer": "EWM"
  },{
    "shortName": "232",
    "longName": "4474460314",
    "normOfMinute": 8,
    "customer": "EWM"
  },{
    "shortName": "231",
    "longName": "01650770235",
    "normOfMinute": 22.06,
    "customer": "EWM"
  },{
    "shortName": "230",
    "longName": "4475419154",
    "normOfMinute": 9.09,
    "customer": "EWM"
  },{
    "shortName": "229",
    "longName": "1378861",
    "normOfMinute": 10.45,
    "customer": "EWM"
  },{
    "shortName": "228",
    "longName": "20101420",
    "normOfMinute": 14.4,
    "customer": "EWM"
  },{
    "shortName": "226",
    "longName": "4472436549",
    "normOfMinute": 20.68,
    "customer": "EWM"
  },{
    "shortName": "225",
    "longName": "1378860",
    "normOfMinute": 11.21,
    "customer": "EWM"
  },{
    "shortName": "224",
    "longName": "ACW3610440",
    "normOfMinute": 12.8,
    "customer": "EWM"
  },{
    "shortName": "222",
    "longName": "4472439055",
    "normOfMinute": 16.12,
    "customer": "EWM"
  },{
    "shortName": "221",
    "longName": "0125504250",
    "normOfMinute": 14.06,
    "customer": "EWM"
  },{
    "shortName": "220",
    "longName": "17405637",
    "normOfMinute": 13.67,
    "customer": "EWM"
  },{
    "shortName": "219",
    "longName": "17239661",
    "normOfMinute": 14.12,
    "customer": "EWM"
  },{
    "shortName": "218",
    "longName": "11071954",
    "normOfMinute": 10.57,
    "customer": "EWM"
  },{
    "shortName": "217",
    "longName": "10076711",
    "normOfMinute": 5.62,
    "customer": "EWM"
  },{
    "shortName": "216",
    "longName": "3HAC042480",
    "normOfMinute": 20.48,
    "customer": "EWM"
  },{
    "shortName": "215",
    "longName": "4475419315",
    "normOfMinute": 2.45,
    "customer": "EWM"
  },{
    "shortName": "214",
    "longName": "0125504230",
    "normOfMinute": 14.06,
    "customer": "EWM"
  },{
    "shortName": "213",
    "longName": "8000850",
    "normOfMinute": 22,
    "customer": "EWM"
  },{
    "shortName": "212",
    "longName": "4472435986",
    "normOfMinute": 14.04,
    "customer": "EWM"
  },{
    "shortName": "211",
    "longName": "T221TM0145100",
    "normOfMinute": 5.8,
    "customer": "EWM"
  },{
    "shortName": "210",
    "longName": "T221TM0140341",
    "normOfMinute": 4.2,
    "customer": "EWM"
  },{
    "shortName": "206",
    "longName": "ACW4055340",
    "normOfMinute": 11.89,
    "customer": "EWM"
  },{
    "shortName": "184",
    "longName": "01727102870",
    "normOfMinute": 9.64,
    "customer": "EWM"
  },{
    "shortName": "205",
    "longName": "4474441049",
    "normOfMinute": 18.59,
    "customer": "EWM"
  },{
    "shortName": "204",
    "longName": "10076715",
    "normOfMinute": 5.72,
    "customer": "EWM"
  },{
    "shortName": "202",
    "longName": "17247806",
    "normOfMinute": 8.02,
    "customer": "EWM"
  },{
    "shortName": "199",
    "longName": "M765150150112",
    "normOfMinute": 2.8,
    "customer": "EWM"
  },{
    "shortName": "198",
    "longName": "6005389",
    "normOfMinute": 4.98,
    "customer": "EWM"
  },{
    "shortName": "195",
    "longName": "01727601570",
    "normOfMinute": 15.02,
    "customer": "EWM"
  },{
    "shortName": "194",
    "longName": "4474460327",
    "normOfMinute": 8,
    "customer": "EWM"
  },{
    "shortName": "191",
    "longName": "4472447038",
    "normOfMinute": 7.25,
    "customer": "EWM"
  },{
    "shortName": "190",
    "longName": "4474454215",
    "normOfMinute": 23.15,
    "customer": "EWM"
  },{
    "shortName": "188",
    "longName": "4472435838",
    "normOfMinute": 16.14,
    "customer": "EWM"
  },{
    "shortName": "187",
    "longName": "1510605962",
    "normOfMinute": 11.83,
    "customer": "EWM"
  },{
    "shortName": "186",
    "longName": "4472436677",
    "normOfMinute": 10.2,
    "customer": "EWM"
  },{
    "shortName": "185",
    "longName": "4472435823",
    "normOfMinute": 18.98,
    "customer": "EWM"
  },{
    "shortName": "182",
    "longName": "4212333910",
    "normOfMinute": 22.04,
    "customer": "EWM"
  },{
    "shortName": "181",
    "longName": "2093440004",
    "normOfMinute": 8.47,
    "customer": "EWM"
  },{
    "shortName": "179",
    "longName": "M765150150311",
    "normOfMinute": 13.6,
    "customer": "EWM"
  },{
    "shortName": "178",
    "longName": "9700601266",
    "normOfMinute": 9.21,
    "customer": "EWM"
  },{
    "shortName": "177",
    "longName": "M222PM0145110",
    "normOfMinute": 14.6,
    "customer": "EWM"
  },{
    "shortName": "176",
    "longName": "M222PM0145100",
    "normOfMinute": 14.6,
    "customer": "EWM"
  },{
    "shortName": "175",
    "longName": "4472436699",
    "normOfMinute": 19.1,
    "customer": "EWM"
  },{
    "shortName": "174",
    "longName": "4212253510",
    "normOfMinute": 22.12,
    "customer": "EWM"
  },{
    "shortName": "171",
    "longName": "4474451169",
    "normOfMinute": 8.52,
    "customer": "EWM"
  },{
    "shortName": "170",
    "longName": "17504948",
    "normOfMinute": 9.41,
    "customer": "EWM"
  },{
    "shortName": "168",
    "longName": "4472439076",
    "normOfMinute": 18.67,
    "customer": "EWM"
  },{
    "shortName": "163",
    "longName": "11206073649",
    "normOfMinute": 14.13,
    "customer": "EWM"
  },{
    "shortName": "162",
    "longName": "M765150150411",
    "normOfMinute": 13,
    "customer": "EWM"
  },{
    "shortName": "161",
    "longName": "01727302470",
    "normOfMinute": 9.5,
    "customer": "EWM"
  },{
    "shortName": "160",
    "longName": "3HAC3170-2",
    "normOfMinute": 15.8,
    "customer": "EWM"
  },{
    "shortName": "158",
    "longName": "453086426 (21012543) 4977",
    "customer": "LH"
  },{
    "shortName": "157",
    "longName": "4474453170",
    "normOfMinute": 14,
    "customer": "EWM"
  },{
    "shortName": "156",
    "longName": "4472435619",
    "normOfMinute": 14.06,
    "customer": "EWM"
  },{
    "shortName": "155",
    "longName": "4472436395",
    "normOfMinute": 18,
    "customer": "EWM"
  },{
    "shortName": "154",
    "longName": "4474451202",
    "normOfMinute": 8.42,
    "customer": "EWM"
  },{
    "shortName": "153",
    "longName": "01727601820",
    "normOfMinute": 18.5,
    "customer": "EWM"
  },{
    "shortName": "152",
    "longName": "H218PM0101041",
    "normOfMinute": 11,
    "customer": "EWM"
  },{
    "shortName": "151",
    "longName": "M530871200041",
    "normOfMinute": 19.73,
    "customer": "EWM"
  },{
    "shortName": "149",
    "longName": "M835921010022",
    "normOfMinute": 17,
    "customer": "EWM"
  },{
    "shortName": "148",
    "longName": "039144682",
    "normOfMinute": 2.9,
    "customer": "EWM"
  },{
    "shortName": "147",
    "longName": "039141837",
    "normOfMinute": 17.43,
    "customer": "EWM"
  },{
    "shortName": "146",
    "longName": "039141810",
    "normOfMinute": 15.93,
    "customer": "EWM"
  },{
    "shortName": "145",
    "longName": "42T7031120",
    "normOfMinute": 6.14,
    "customer": "EWM"
  },{
    "shortName": "144",
    "longName": "4234637110",
    "normOfMinute": 16.7,
    "customer": "EWM"
  },{
    "shortName": "143",
    "longName": "01750603130",
    "normOfMinute": 12.02,
    "customer": "EWM"
  },{
    "shortName": "142",
    "longName": "M222PM0101043",
    "normOfMinute": 17.26,
    "customer": "EWM"
  },{
    "shortName": "141",
    "longName": "6002665",
    "normOfMinute": 4.49,
    "customer": "EWM"
  },{
    "shortName": "140",
    "longName": "6002385",
    "normOfMinute": 3.98,
    "customer": "EWM"
  },{
    "shortName": "139",
    "longName": "WDH0300031",
    "normOfMinute": 10.22,
    "customer": "EWM"
  },{
    "shortName": "138",
    "longName": "GQB2501100301",
    "normOfMinute": 7.2,
    "customer": "EWM"
  },{
    "shortName": "136",
    "longName": "4472449015",
    "normOfMinute": 9.83,
    "customer": "EWM"
  },{
    "shortName": "135",
    "longName": "4472449014",
    "normOfMinute": 10.29,
    "customer": "EWM"
  },{
    "shortName": "134",
    "longName": "20094170",
    "normOfMinute": 9.6,
    "customer": "EWM"
  },{
    "shortName": "132",
    "longName": "4182332611",
    "normOfMinute": 6.4,
    "customer": "EWM"
  },{
    "shortName": "130",
    "longName": "M954150150150",
    "normOfMinute": 10.51,
    "customer": "EWM"
  },{
    "shortName": "129",
    "longName": "F631300C",
    "normOfMinute": 26.84,
    "customer": "EWM"
  },{
    "shortName": "128",
    "longName": "4253331250",
    "normOfMinute": 18.2,
    "customer": "EWM"
  },{
    "shortName": "126",
    "longName": "2712607",
    "normOfMinute": 23.14,
    "customer": "EWM"
  },{
    "shortName": "125",
    "longName": "4472435882",
    "normOfMinute": 20.6,
    "customer": "EWM"
  },{
    "shortName": "124",
    "longName": "3543982",
    "normOfMinute": 14.57,
    "customer": "EWM"
  },{
    "shortName": "123",
    "longName": "4472436382",
    "normOfMinute": 19.6,
    "customer": "EWM"
  },{
    "shortName": "122",
    "longName": "2456201002",
    "normOfMinute": 13.63,
    "customer": "EWM"
  },{
    "shortName": "121",
    "longName": "4472449017",
    "normOfMinute": 7.9,
    "customer": "EWM"
  },{
    "shortName": "120",
    "longName": "4472436503",
    "normOfMinute": 16.7,
    "customer": "EWM"
  },{
    "shortName": "118",
    "longName": "4472499057",
    "normOfMinute": 11.5,
    "customer": "EWM"
  },{
    "shortName": "117",
    "longName": "2453201002",
    "normOfMinute": 7.33,
    "customer": "EWM"
  },{
    "shortName": "116",
    "longName": "3962310206",
    "normOfMinute": 12.2,
    "customer": "EWM"
  },{
    "shortName": "115",
    "longName": "02152719",
    "normOfMinute": 7.25,
    "customer": "EWM"
  },{
    "shortName": "114",
    "longName": "4214637110",
    "normOfMinute": 15.36,
    "customer": "EWM"
  },{
    "shortName": "113",
    "longName": "2379542",
    "normOfMinute": 7.5,
    "customer": "EWM"
  },{
    "shortName": "112",
    "longName": "4472435884",
    "normOfMinute": 16.3,
    "customer": "EWM"
  },{
    "shortName": "111",
    "longName": "M737921010021",
    "normOfMinute": 15.62,
    "customer": "EWM"
  },{
    "shortName": "110",
    "longName": "4475419310",
    "normOfMinute": 3.85,
    "customer": "EWM"
  },{
    "shortName": "109",
    "longName": "4252232311",
    "normOfMinute": 7.44,
    "customer": "EWM"
  },{
    "shortName": "108",
    "longName": "M260300010060",
    "normOfMinute": 15.28,
    "customer": "EWM"
  },{
    "shortName": "107",
    "longName": "5907742",
    "normOfMinute": 25.2,
    "customer": "EWM"
  },{
    "shortName": "104",
    "longName": "1140600562",
    "normOfMinute": 5,
    "customer": "EWM"
  },{
    "shortName": "103",
    "longName": "012064101",
    "normOfMinute": 5.4,
    "customer": "EWM"
  },{
    "shortName": "102",
    "longName": "M765150150321",
    "normOfMinute": 13.6,
    "customer": "EWM"
  },{
    "shortName": "101",
    "longName": "2005301A",
    "normOfMinute": 9.79,
    "customer": "EWM"
  },{
    "shortName": "100",
    "longName": "20126570",
    "normOfMinute": 9.69,
    "customer": "EWM"
  },{
    "shortName": "99",
    "longName": "2712594",
    "normOfMinute": 20.1,
    "customer": "EWM"
  },{
    "shortName": "98",
    "longName": "M842300050010",
    "normOfMinute": 16.34,
    "customer": "EWM"
  },{
    "shortName": "97",
    "longName": "M765150150421",
    "normOfMinute": 13.6,
    "customer": "EWM"
  },{
    "shortName": "96",
    "longName": "0125504520",
    "normOfMinute": 11,
    "customer": "EWM"
  },{
    "shortName": "94",
    "longName": "4253341181",
    "normOfMinute": 7.89,
    "customer": "EWM"
  },{
    "shortName": "93",
    "longName": "M945150050020",
    "normOfMinute": 6.8,
    "customer": "EWM"
  },{
    "shortName": "92",
    "longName": "17492576",
    "normOfMinute": 9.41,
    "customer": "EWM"
  },{
    "shortName": "91",
    "longName": "12280500",
    "normOfMinute": 11.8,
    "customer": "EWM"
  },{
    "shortName": "90",
    "longName": "GS315110305",
    "normOfMinute": 9.1,
    "customer": "EWM"
  },{
    "shortName": "89",
    "longName": "M530871200040",
    "normOfMinute": 18.73,
    "customer": "EWM"
  },{
    "shortName": "88",
    "longName": "M501150150101",
    "normOfMinute": 5.95,
    "customer": "EWM"
  },{
    "shortName": "87",
    "longName": "4472499055",
    "normOfMinute": 8.66,
    "customer": "EWM"
  },{
    "shortName": "86",
    "longName": "9900600262",
    "normOfMinute": 9.8,
    "customer": "EWM"
  },{
    "shortName": "85",
    "longName": "2379632",
    "normOfMinute": 18.23,
    "customer": "EWM"
  },{
    "shortName": "84",
    "longName": "17471674",
    "normOfMinute": 4.99,
    "customer": "EWM"
  },{
    "shortName": "83",
    "longName": "0125503530",
    "normOfMinute": 14.5,
    "customer": "EWM"
  },{
    "shortName": "80",
    "longName": "M416860030040",
    "normOfMinute": 20,
    "customer": "EWM"
  },{
    "shortName": "79",
    "longName": "01750400790",
    "normOfMinute": 10.46,
    "customer": "EWM"
  },{
    "shortName": "78",
    "longName": "20043480",
    "normOfMinute": 9.71,
    "customer": "EWM"
  },{
    "shortName": "77",
    "longName": "13806001619",
    "normOfMinute": 3.2,
    "customer": "EWM"
  },{
    "shortName": "72",
    "longName": "CA41477001",
    "normOfMinute": 4.91,
    "customer": "EWM"
  },{
    "shortName": "71",
    "longName": "WDH0300116",
    "normOfMinute": 5.46,
    "customer": "EWM"
  },{
    "shortName": "70",
    "longName": "M835150150024",
    "normOfMinute": 3.11,
    "customer": "EWM"
  },{
    "shortName": "69",
    "longName": "9700601166",
    "normOfMinute": 9.21,
    "customer": "EWM"
  },{
    "shortName": "68",
    "longName": "0125503510",
    "normOfMinute": 12.72,
    "customer": "EWM"
  },{
    "shortName": "67",
    "longName": "0125503500",
    "normOfMinute": 13.25,
    "customer": "EWM"
  },{
    "shortName": "66",
    "longName": "0125504510",
    "normOfMinute": 11,
    "customer": "EWM"
  },{
    "shortName": "64",
    "longName": "M737860032012",
    "normOfMinute": 20,
    "customer": "EWM"
  },{
    "shortName": "63",
    "longName": "1380600661",
    "normOfMinute": 2.82,
    "customer": "EWM"
  },{
    "shortName": "61",
    "longName": "2997198",
    "normOfMinute": 9.4,
    "customer": "EWM"
  },{
    "shortName": "60",
    "longName": "2379847",
    "normOfMinute": 24.61,
    "customer": "EWM"
  },{
    "shortName": "58",
    "longName": "2817010002",
    "normOfMinute": 14,
    "customer": "EWM"
  },{
    "shortName": "57",
    "longName": "7700103261",
    "normOfMinute": 17.81,
    "customer": "EWM"
  },{
    "shortName": "56",
    "longName": "9700603163",
    "normOfMinute": 10.3,
    "customer": "EWM"
  },{
    "shortName": "55",
    "longName": "M530150151020",
    "normOfMinute": 6.52,
    "customer": "EWM"
  },{
    "shortName": "54",
    "longName": "12306013619",
    "normOfMinute": 9.93,
    "customer": "EWM"
  },{
    "shortName": "53",
    "longName": "01727301970",
    "normOfMinute": 11.18,
    "customer": "EWM"
  },{
    "shortName": "52",
    "longName": "M236300080010",
    "normOfMinute": 7.24,
    "customer": "EWM"
  },{
    "shortName": "51",
    "longName": "4481471158",
    "normOfMinute": 8.62,
    "customer": "EWM"
  },{
    "shortName": "50",
    "longName": "11071822",
    "normOfMinute": 7.92,
    "customer": "EWM"
  },{
    "shortName": "49",
    "longName": "01727601840",
    "normOfMinute": 15.74,
    "customer": "EWM"
  },{
    "shortName": "48",
    "longName": "PEO-R389",
    "normOfMinute": 6.14,
    "customer": "EWM"
  },{
    "shortName": "46",
    "longName": "84E901637H1",
    "customer": "LH"
  },{
    "shortName": "45",
    "longName": "7700105361",
    "normOfMinute": 16.53,
    "customer": "EWM"
  },{
    "shortName": "42",
    "longName": "2588744",
    "normOfMinute": 7.4,
    "customer": "EWM"
  },{
    "shortName": "41",
    "longName": "0125503520",
    "normOfMinute": 14.5,
    "customer": "EWM"
  },{
    "shortName": "40",
    "longName": "M530150050033",
    "normOfMinute": 15.5,
    "customer": "EWM"
  },{
    "shortName": "39",
    "longName": "M716150150021",
    "normOfMinute": 6.02,
    "customer": "EWM"
  },{
    "shortName": "38",
    "longName": "453086420 (21012578)",
    "customer": "LH"
  },{
    "shortName": "37",
    "longName": "9700603063",
    "normOfMinute": 10.3,
    "customer": "EWM"
  },{
    "shortName": "36",
    "longName": "2817001002",
    "normOfMinute": 14,
    "customer": "EWM"
  },{
    "shortName": "35",
    "longName": "PCO-R296V1",
    "normOfMinute": 8.16,
    "customer": "EWM"
  },{
    "shortName": "34",
    "longName": "M954150150100",
    "normOfMinute": 11.51,
    "customer": "EWM"
  },{
    "shortName": "33",
    "longName": "M835860030010",
    "normOfMinute": 19.42,
    "customer": "EWM"
  },{
    "shortName": "32",
    "longName": "M737870050010",
    "normOfMinute": 5.46,
    "customer": "EWM"
  },{
    "shortName": "29",
    "longName": "M702100050030",
    "normOfMinute": 6.24,
    "customer": "EWM"
  },{
    "shortName": "27",
    "longName": "M501150050032",
    "normOfMinute": 11.4,
    "customer": "EWM"
  },{
    "shortName": "26",
    "longName": "M501150150023",
    "normOfMinute": 15.92,
    "customer": "EWM"
  },{
    "shortName": "25",
    "longName": "M501150150013",
    "normOfMinute": 14.42,
    "customer": "EWM"
  },{
    "shortName": "23",
    "longName": "M416150150110",
    "normOfMinute": 2.3,
    "customer": "EWM"
  },{
    "shortName": "22",
    "longName": "M404892010060",
    "normOfMinute": 11.48,
    "customer": "EWM"
  },{
    "shortName": "20",
    "longName": "GQB2001100301",
    "normOfMinute": 4.5,
    "customer": "EWM"
  },{
    "shortName": "19",
    "longName": "CA20027001",
    "normOfMinute": 6.7,
    "customer": "EWM"
  },{
    "shortName": "18",
    "longName": "3J032-6607",
    "normOfMinute": 18.59,
    "customer": "EWM"
  },{
    "shortName": "17",
    "longName": "2098340015",
    "normOfMinute": 9.37,
    "customer": "EWM"
  },{
    "shortName": "16",
    "longName": "01727601361",
    "normOfMinute": 16.13,
    "customer": "EWM"
  },{
    "shortName": "15",
    "longName": "13806002629",
    "normOfMinute": 2.52,
    "customer": "EWM"
  },{
    "shortName": "14",
    "longName": "9900600162",
    "normOfMinute": 9.8,
    "customer": "EWM"
  },{
    "shortName": "13",
    "longName": "9700601564",
    "normOfMinute": 9,
    "customer": "EWM"
  },{
    "shortName": "12",
    "longName": "4475407083",
    "normOfMinute": 3.96,
    "customer": "EWM"
  },{
    "shortName": "11",
    "longName": "2398200002",
    "normOfMinute": 8.07,
    "customer": "EWM"
  },{
    "shortName": "10",
    "longName": "2099440005",
    "normOfMinute": 7.93,
    "customer": "EWM"
  },{
    "shortName": "9",
    "longName": "01782102280",
    "normOfMinute": 9.66,
    "customer": "EWM"
  },{
    "shortName": "6",
    "longName": "17425181",
    "normOfMinute": 25.25,
    "customer": "EWM"
  },{
    "shortName": "5",
    "longName": "17419587",
    "normOfMinute": 24,
    "customer": "EWM"
  },{
    "shortName": "4",
    "longName": "17411334",
    "normOfMinute": 15,
    "customer": "EWM"
  },{
    "shortName": "3",
    "longName": "2588747",
    "normOfMinute": 7.12,
    "customer": "EWM"
  },{
    "shortName": "2",
    "longName": "17213070",
    "normOfMinute": 18.24,
    "customer": "EWM"
  },{
    "shortName": "1",
    "longName": "0961845",
    "normOfMinute": 11.25,
    "customer": "EWM"
  },{
    "shortName": "74",
    "longName": "001071999 (21012399)",
    "customer": "LH"
  },{
    "shortName": "75",
    "longName": "M945860030022",
    "normOfMinute": 5.18,
    "customer": "EWM"
  }
];


async function seedDb(prismaClient: PrismaClient) {
for (const detail of mockDetails) {

    await prismaClient.details.create({
    // where: {}, // предполагаем что shortName уникален
    // where: { shortName: detail.shortName }, // предполагаем что shortName уникален
    // update: {}, // ничего не меняем если запись есть
    data: {
        shortName: detail.shortName,
        longName: detail.longName,
        normOfMinute: detail.normOfMinute ?? null,
        customer: detail.customer,
    },
    });
}

console.info('Database was filled');
}

async function bootstrap() {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
