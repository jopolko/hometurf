const schools = [
    {
        "id": 1,
        "name": "Thorncliffe Park Public School",
        "address": "80 Thorncliffe Park Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7053900432282,
            -79.3434367551101
        ],
        "neighborhood": 55
    },
    {
        "id": 2,
        "name": "Highfield Junior School",
        "address": "85 Mount Olive Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7458920486043,
            -79.5891451714213
        ],
        "neighborhood": 2
    },
    {
        "id": 3,
        "name": "Victoria Village Public School",
        "address": "88 Sweeney Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7359594203073,
            -79.3141820772089
        ],
        "neighborhood": 43
    },
    {
        "id": 4,
        "name": "Grenoble Public School",
        "address": "9 Grenoble Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7154310882437,
            -79.3327597513647
        ],
        "neighborhood": 44,
        "phone": "(416) 397-2900"
    },
    {
        "id": 5,
        "name": "Manhattan Park Junior Public School",
        "address": "90 Manhattan Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7533540031688,
            -79.2953011186665
        ],
        "neighborhood": 126
    },
    {
        "id": 6,
        "name": "Brian Public School",
        "address": "95 Brian Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7824531904325,
            -79.331933544035
        ],
        "neighborhood": 46
    },
    {
        "id": 7,
        "name": "North Preparatory Junior Public School",
        "address": "1100 Spadina Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7057655831012,
            -79.4203748853603
        ],
        "neighborhood": 102,
        "phone": "(416) 393-9230"
    },
    {
        "id": 8,
        "name": "Kingsview Village Junior School",
        "address": "1 York Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6978666584909,
            -79.5507891278971
        ],
        "neighborhood": 6
    },
    {
        "id": 9,
        "name": "Bliss Carman Senior Public School",
        "address": "10 Bellamy Rd S",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.732648962951,
            -79.2256018786147
        ],
        "neighborhood": 139
    },
    {
        "id": 10,
        "name": "Flemington Public School",
        "address": "10 Flemington Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7200875786734,
            -79.4444540037633
        ],
        "neighborhood": 32
    },
    {
        "id": 11,
        "name": "Bloordale Middle School",
        "address": "10 Toledo Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6391456489153,
            -79.5719465300651
        ],
        "neighborhood": 13
    },
    {
        "id": 12,
        "name": "Courcelette Public School",
        "address": "100 Fallingbrook Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6793188262702,
            -79.2785659239745
        ],
        "neighborhood": 62
    },
    {
        "id": 13,
        "name": "Derrydown Public School",
        "address": "120 Derrydown Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7586899266831,
            -79.4937101803973
        ],
        "neighborhood": 27
    },
    {
        "id": 14,
        "name": "Maplewood High School",
        "address": "120 Galloway Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7588978527975,
            -79.1948946345862
        ],
        "neighborhood": 140
    },
    {
        "id": 15,
        "name": "George B Little Public School",
        "address": "125 Orton Park Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7711994113319,
            -79.2081104450894
        ],
        "neighborhood": 135
    },
    {
        "id": 16,
        "name": "John G Althouse Middle School",
        "address": "130 Lloyd Manor Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6683053235247,
            -79.5540087673011
        ],
        "neighborhood": 10
    },
    {
        "id": 17,
        "name": "Warren Park Junior Public School",
        "address": "135 Varsity Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6628427653687,
            -79.4994375141874
        ],
        "neighborhood": 114
    },
    {
        "id": 18,
        "name": "Humbercrest Public School",
        "address": "14 St Mark's Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6604526501243,
            -79.4910553735324
        ],
        "neighborhood": 89
    },
    {
        "id": 19,
        "name": "Cliffwood Public School",
        "address": "140 Cliffwood Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8062920920724,
            -79.360068599198
        ],
        "neighborhood": 48
    },
    {
        "id": 20,
        "name": "Cedarvale Community School",
        "address": "145 Ava Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.696025486871,
            -79.4302837269918
        ],
        "neighborhood": 106
    },
    {
        "id": 21,
        "name": "Greenland Public School",
        "address": "15 Greenland Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7336070379667,
            -79.3385329307779
        ],
        "neighborhood": 42
    },
    {
        "id": 22,
        "name": "Victoria Park Collegiate Institute",
        "address": "15 Wallingford Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7560593384022,
            -79.321464421707
        ],
        "neighborhood": 150,
        "phone": "(416) 395-3310"
    },
    {
        "id": 23,
        "name": "White Haven Public School",
        "address": "105 Invergordon Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7872721001055,
            -79.2472058211989
        ],
        "neighborhood": 128
    },
    {
        "id": 24,
        "name": "Wexford Public School",
        "address": "1050 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7401530486018,
            -79.3041148885222
        ],
        "neighborhood": 43
    },
    {
        "id": 25,
        "name": "Seventh Street Junior School",
        "address": "101 Seventh St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.5999243685511,
            -79.5041938387474
        ],
        "neighborhood": 18
    },
    {
        "id": 26,
        "name": "Norseman Junior Middle School",
        "address": "105 Norseman St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6343052597247,
            -79.5163297488864
        ],
        "neighborhood": 158
    },
    {
        "id": 27,
        "name": "Lillian Public School",
        "address": "1059 Lillian St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7978213696628,
            -79.4103985022169
        ],
        "neighborhood": 50
    },
    {
        "id": 28,
        "name": "Riverdale Collegiate Institute",
        "address": "1094 Gerrard St E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6700476981757,
            -79.3348598191726
        ],
        "neighborhood": 69,
        "phone": "(416) 393-9820"
    },
    {
        "id": 29,
        "name": "King Edward Junior and Senior Public School",
        "address": "112 Lippincott St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6582441160701,
            -79.4074089349881
        ],
        "neighborhood": 79,
        "phone": "(416) 393-1320"
    },
    {
        "id": 30,
        "name": "Bloor Collegiate Institute",
        "address": "1141 Bloor St W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.65924610796,
            -79.4367968963581
        ],
        "neighborhood": 172,
        "phone": "(416) 393-1420"
    },
    {
        "id": 31,
        "name": "Monarch Park Collegiate Institute",
        "address": "1 Hanson St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6792807307855,
            -79.3227718925618
        ],
        "neighborhood": 65,
        "phone": "(416) 393-0190"
    },
    {
        "id": 32,
        "name": "C R Marchant Middle School",
        "address": "1 Ralph St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7017214781638,
            -79.5129333966558
        ],
        "neighborhood": 113
    },
    {
        "id": 33,
        "name": "Central Etobicoke High School",
        "address": "10 Denfield St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6790185578849,
            -79.5554889336889
        ],
        "neighborhood": 7,
        "phone": "(416) 394-7090"
    },
    {
        "id": 34,
        "name": "Weston Collegiate Institute",
        "address": "100 Pine St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7038163110412,
            -79.5094217518773
        ],
        "neighborhood": 113,
        "phone": "(416) 394-3250"
    },
    {
        "id": 35,
        "name": "Contact Alternative School",
        "address": "132 St Patrick St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6537657298722,
            -79.3903939018466
        ],
        "neighborhood": 78
    },
    {
        "id": 36,
        "name": "Scarborough Village Public School",
        "address": "15 Luella St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7441193622963,
            -79.2220717938636
        ],
        "neighborhood": 139
    },
    {
        "id": 37,
        "name": "Winchester Junior and Senior Public School",
        "address": "15 Prospect St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6663306750224,
            -79.3708962772997
        ],
        "neighborhood": 74,
        "phone": "(416) 393-1270"
    },
    {
        "id": 38,
        "name": "George Harvey Collegiate Institute",
        "address": "1700 Keele St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6845465069876,
            -79.473699193678
        ],
        "neighborhood": 110
    },
    {
        "id": 39,
        "name": "Orde Street Public School",
        "address": "18 Orde St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6586274865643,
            -79.3922600824158
        ],
        "neighborhood": 78,
        "phone": "(416) 393-1900"
    },
    {
        "id": 40,
        "name": "Inglenook Community School",
        "address": "19 Sackville St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6539752894773,
            -79.3594007219466
        ],
        "neighborhood": 72,
        "phone": "(416) 393-0560"
    },
    {
        "id": 41,
        "name": "Charles E Webster Public School",
        "address": "1900 Keele St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6934344434159,
            -79.475099515903
        ],
        "neighborhood": 112
    },
    {
        "id": 42,
        "name": "ALPHA Alternative Junior School",
        "address": "20 Brant St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6457220331711,
            -79.3982225847432
        ],
        "neighborhood": 164,
        "phone": "(416) 393-1880"
    },
    {
        "id": 43,
        "name": "Oasis Alternative Secondary School (Arts & Social Change Program)",
        "address": "20 Brant St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6457220331711,
            -79.3982225847432
        ],
        "neighborhood": 164
    },
    {
        "id": 44,
        "name": "Eastview Public School",
        "address": "20 Waldock St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7589633617233,
            -79.1912804405348
        ],
        "neighborhood": 140
    },
    {
        "id": 45,
        "name": "Weston Memorial Junior Public School",
        "address": "200 John St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7059781458169,
            -79.509329936238
        ],
        "neighborhood": 113
    },
    {
        "id": 46,
        "name": "George R Gauld Junior School",
        "address": "200 Melrose St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6205662675783,
            -79.498405687125
        ],
        "neighborhood": 16
    },
    {
        "id": 47,
        "name": "Niagara Street Junior Public School",
        "address": "222 Niagara St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6439374594858,
            -79.4082529250071
        ],
        "neighborhood": 162,
        "phone": "(416) 393-1371"
    },
    {
        "id": 48,
        "name": "Fairbank Public School",
        "address": "2335 Dufferin St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6942876649058,
            -79.4490892289333
        ],
        "neighborhood": 108
    },
    {
        "id": 49,
        "name": "Leslieville Junior Public School",
        "address": "254 Leslie St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6673207679123,
            -79.3324077238987
        ],
        "neighborhood": 65,
        "phone": "(416) 393-9480"
    },
    {
        "id": 50,
        "name": "Annette Street Junior and Senior Public School",
        "address": "265 Annette St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6614231859019,
            -79.4728312797592
        ],
        "neighborhood": 88,
        "phone": "(416) 393-9040"
    },
    {
        "id": 51,
        "name": "High Park Alternative Junior School",
        "address": "265 Annette St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6614231859019,
            -79.4728312797592
        ],
        "neighborhood": 88
    },
    {
        "id": 52,
        "name": "Lucy McCormick Senior School",
        "address": "2717 Dundas St W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6646326067736,
            -79.4601799672306
        ],
        "neighborhood": 90,
        "phone": "(416) 397-2713"
    },
    {
        "id": 53,
        "name": "Downsview Public School",
        "address": "2829 Keele St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7311138437024,
            -79.4824357959776
        ],
        "neighborhood": 154
    },
    {
        "id": 54,
        "name": "Harbord Collegiate Institute",
        "address": "286 Harbord St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6612895164804,
            -79.4142666153396
        ],
        "neighborhood": 80,
        "phone": "(416) 393-1650"
    },
    {
        "id": 55,
        "name": "H J Alexander Community School",
        "address": "30 King St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7023994674705,
            -79.5202286163034
        ],
        "neighborhood": 113
    },
    {
        "id": 56,
        "name": "Howard Junior Public School",
        "address": "30 Marmaduke St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.650426312651,
            -79.4522720930996
        ],
        "neighborhood": 86,
        "phone": "(416) 393-9255"
    },
    {
        "id": 57,
        "name": "Lord Dufferin Junior and Senior Public School",
        "address": "350 Parliament St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6608245373338,
            -79.3669550617347
        ],
        "neighborhood": 72,
        "phone": "(416) 393-1760"
    },
    {
        "id": 58,
        "name": "Carleton Village Junior and Senior Sports and Wellness Academy",
        "address": "315 Osler St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6723528079383,
            -79.4600288033669
        ],
        "neighborhood": 91
    },
    {
        "id": 59,
        "name": "David Hornell Junior School",
        "address": "32 Victoria St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6193332842276,
            -79.4888936625883
        ],
        "neighborhood": 161
    },
    {
        "id": 60,
        "name": "Ogden Junior Public School",
        "address": "33 Phoebe St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6500136150807,
            -79.395126856022
        ],
        "neighborhood": 78,
        "phone": "(416) 393-9110"
    },
    {
        "id": 61,
        "name": "Lord Lansdowne Junior Public School",
        "address": "33 Robert St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6589530395299,
            -79.401909850979
        ],
        "neighborhood": 79,
        "phone": "(416) 393-1350"
    },
    {
        "id": 62,
        "name": "City View Alternative Senior School",
        "address": "38 Shirley St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6485242370315,
            -79.4367221725004
        ],
        "neighborhood": 84,
        "phone": "(416) 393-8708"
    },
    {
        "id": 63,
        "name": "Shirley Street Junior Public School",
        "address": "38 Shirley St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6485242370315,
            -79.4367221725004
        ],
        "neighborhood": 84,
        "phone": "(416) 393-9270"
    },
    {
        "id": 64,
        "name": "School of Experiential Education",
        "address": "40 McArthur St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7016350249789,
            -79.5463909750587
        ],
        "neighborhood": 6,
        "phone": "(416) 394-6990"
    },
    {
        "id": 65,
        "name": "Horizon Alternative Senior School",
        "address": "570 Shaw St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.657978462827,
            -79.4219986112882
        ],
        "neighborhood": 80,
        "phone": "(416) 393-1298"
    },
    {
        "id": 66,
        "name": "Kensington Community School",
        "address": "401 College St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.656397819463,
            -79.4057315246338
        ],
        "neighborhood": 79
    },
    {
        "id": 67,
        "name": "Bloorlea Middle School",
        "address": "4050 Bloor St W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6376529320238,
            -79.5556754935908
        ],
        "neighborhood": 13
    },
    {
        "id": 68,
        "name": "Nelson Mandela Park Public School",
        "address": "440 Shuter St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6582511901491,
            -79.3605527757157
        ],
        "neighborhood": 72,
        "phone": "(416) 393-1620"
    },
    {
        "id": 69,
        "name": "Inglewood Heights Junior Public School",
        "address": "45 Dempster St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7794075284367,
            -79.2923181525917
        ],
        "neighborhood": 118
    },
    {
        "id": 70,
        "name": "Brookview Middle School",
        "address": "4505 Jane St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7674572380872,
            -79.5172466551502
        ],
        "neighborhood": 27
    },
    {
        "id": 71,
        "name": "Tumpane Public School",
        "address": "48 Tumpane St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7265952806861,
            -79.5022550959971
        ],
        "neighborhood": 154
    },
    {
        "id": 72,
        "name": "Jarvis Collegiate Institute",
        "address": "495 Jarvis St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6660913938656,
            -79.3777587671164
        ],
        "neighborhood": 167,
        "phone": "(416) 393-0140"
    },
    {
        "id": 73,
        "name": "Hawthorne II Bilingual Alternative Junior School",
        "address": "50 Essex St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6682357494066,
            -79.4223654834763
        ],
        "neighborhood": 172,
        "phone": "(416) 393-0727"
    },
    {
        "id": 74,
        "name": "Essex Junior and Senior Public School",
        "address": "50 Essex St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6682357494066,
            -79.4223654834763
        ],
        "neighborhood": 172,
        "phone": "(416) 393-0717"
    },
    {
        "id": 75,
        "name": "Harwood Public School",
        "address": "50 Leigh St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6761859127687,
            -79.4784124771008
        ],
        "neighborhood": 111
    },
    {
        "id": 76,
        "name": "Huron Street Junior Public School",
        "address": "541 Huron St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6705755099718,
            -79.4024215880623
        ],
        "neighborhood": 95,
        "phone": "(416) 393-1570"
    },
    {
        "id": 77,
        "name": "Cedarbrook Public School",
        "address": "56 Nelson St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7472933923281,
            -79.2301927515264
        ],
        "neighborhood": 138
    },
    {
        "id": 78,
        "name": "Runnymede Collegiate Institute",
        "address": "569 Jane St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6635322654948,
            -79.4898113825241
        ],
        "neighborhood": 89,
        "phone": "(416) 394-3200"
    },
    {
        "id": 79,
        "name": "Central Toronto Academy",
        "address": "570 Shaw St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.657978462827,
            -79.4219986112882
        ],
        "neighborhood": 80,
        "phone": "(416) 393-0030"
    },
    {
        "id": 80,
        "name": "Zion Heights Middle School",
        "address": "5900 Leslie St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7979149025647,
            -79.3710972374637
        ],
        "neighborhood": 48
    },
    {
        "id": 81,
        "name": "Beverley School",
        "address": "64 Baldwin St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6557652368658,
            -79.3957051033565
        ],
        "neighborhood": 78,
        "phone": "(416) 397-2750"
    },
    {
        "id": 82,
        "name": "Rose Avenue Junior Public School",
        "address": "675 Ontario St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6703164704159,
            -79.3727880966405
        ],
        "neighborhood": 74,
        "phone": "(416) 393-1260"
    },
    {
        "id": 83,
        "name": "Heydon Park Secondary School",
        "address": "70 D'Arcy St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6549646089495,
            -79.394534752422
        ],
        "neighborhood": 78,
        "phone": "(416) 393-1710"
    },
    {
        "id": 84,
        "name": "Sprucecourt Public School",
        "address": "70 Spruce St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6644860052749,
            -79.3638299150084
        ],
        "neighborhood": 71
    },
    {
        "id": 85,
        "name": "Eastdale Collegiate Institute",
        "address": "701 Gerrard St E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6659265701789,
            -79.3488189225485
        ],
        "neighborhood": 68,
        "phone": "(416) 393-9630"
    },
    {
        "id": 86,
        "name": "Second Street Junior Middle School",
        "address": "71 Second St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6037250776607,
            -79.5000229034999
        ],
        "neighborhood": 18
    },
    {
        "id": 87,
        "name": "Rosedale Heights School of the Arts",
        "address": "711 Bloor St E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6739396616654,
            -79.3660163370219
        ],
        "neighborhood": 71,
        "phone": "(416) 393-1580"
    },
    {
        "id": 88,
        "name": "Central Technical School",
        "address": "725 Bathurst St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6628382420106,
            -79.4085177947948
        ],
        "neighborhood": 79,
        "phone": "(416) 393-0060"
    },
    {
        "id": 89,
        "name": "West End Alternative School",
        "address": "777 Bloor St W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6624299848934,
            -79.4198340161091
        ],
        "neighborhood": 80,
        "phone": "(416) 393-0660"
    },
    {
        "id": 90,
        "name": "Church Street Junior Public School",
        "address": "83 Alexander St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6636084257427,
            -79.3791781653545
        ],
        "neighborhood": 167,
        "phone": "(416) 393-1250"
    },
    {
        "id": 91,
        "name": "Downtown Alternative School",
        "address": "85 Lower Jarvis St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6477361331853,
            -79.3704156513245
        ],
        "neighborhood": 73,
        "phone": "(416) 393-1882"
    },
    {
        "id": 92,
        "name": "Ursula Franklin Academy",
        "address": "146 Glendonwynne Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6567074123716,
            -79.4748206948471
        ],
        "neighborhood": 88,
        "phone": "(416) 393-0430"
    },
    {
        "id": 93,
        "name": "James S Bell Junior Middle Sports and Wellness Academy",
        "address": "90 Thirty First St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.5943542260396,
            -79.5301917018794
        ],
        "neighborhood": 19
    },
    {
        "id": 94,
        "name": "Brock Public School",
        "address": "93 Margueretta St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6530496924269,
            -79.4378441314772
        ],
        "neighborhood": 84,
        "phone": "(416) 393-9245"
    },
    {
        "id": 95,
        "name": "Dundas Junior Public School",
        "address": "935 Dundas St E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6620777465508,
            -79.3486863276324
        ],
        "neighborhood": 72,
        "phone": "(416) 393-9565"
    },
    {
        "id": 96,
        "name": "First Nations School of Toronto",
        "address": "16 Phin Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6791402347004,
            -79.3366360566295
        ],
        "neighborhood": 69
    },
    {
        "id": 97,
        "name": "Ledbury Park Elementary and Middle School",
        "address": "95 Falkirk St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7274253087965,
            -79.4271823065033
        ],
        "neighborhood": 39
    },
    {
        "id": 98,
        "name": "Roselands Junior Public School",
        "address": "990 Jane St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6812267942846,
            -79.4990610012849
        ],
        "neighborhood": 115
    },
    {
        "id": 99,
        "name": "Winona Drive Senior Public School",
        "address": "101 Winona Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6770020664784,
            -79.4308587867559
        ],
        "neighborhood": 94,
        "phone": "(416) 393-1680"
    },
    {
        "id": 100,
        "name": "Steelesview Public School",
        "address": "105 Bestview Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8026660882921,
            -79.3856328580992
        ],
        "neighborhood": 49
    },
    {
        "id": 101,
        "name": "Sir William Osler High School",
        "address": "1050 Huntingwood Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7975664888386,
            -79.2874013328849
        ],
        "neighborhood": 148,
        "phone": "(416) 396-6830"
    },
    {
        "id": 102,
        "name": "Glen Ravine Junior Public School",
        "address": "11 Gadsby Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7382246272196,
            -79.2540589454282
        ],
        "neighborhood": 138
    },
    {
        "id": 103,
        "name": "Roywood Public School",
        "address": "11 Roywood Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7647240733216,
            -79.3217731783625
        ],
        "neighborhood": 150
    },
    {
        "id": 104,
        "name": "Tredway Woodsworth Public School",
        "address": "112 Sedgemount Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7650332154187,
            -79.2352659356635
        ],
        "neighborhood": 142
    },
    {
        "id": 105,
        "name": "McMurrich Junior Public School",
        "address": "115 Winona Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6780763704772,
            -79.4310619546751
        ],
        "neighborhood": 94,
        "phone": "(416) 393-1770"
    },
    {
        "id": 106,
        "name": "Elkhorn Public School",
        "address": "10 Elkhorn Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7712153929829,
            -79.3800624355928
        ],
        "neighborhood": 52
    },
    {
        "id": 107,
        "name": "Elmbank Junior Middle Academy",
        "address": "10 Pittsboro Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7365019019057,
            -79.5900470677447
        ],
        "neighborhood": 2
    },
    {
        "id": 108,
        "name": "Chalkfarm Public School",
        "address": "100 Chalkfarm Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7271064323401,
            -79.5143927419889
        ],
        "neighborhood": 154
    },
    {
        "id": 109,
        "name": "Milne Valley Middle School",
        "address": "100 Underhill Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7472020481689,
            -79.3267091236923
        ],
        "neighborhood": 149
    },
    {
        "id": 110,
        "name": "Crestview Public School",
        "address": "101 Seneca Hill Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7884321784152,
            -79.3598465997775
        ],
        "neighborhood": 47,
        "phone": "(416) 395-2250"
    },
    {
        "id": 111,
        "name": "Whitney Junior Public School",
        "address": "119 Rosedale Heights Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6871603367392,
            -79.3783972733833
        ],
        "neighborhood": 98,
        "phone": "(416) 393-9380"
    },
    {
        "id": 112,
        "name": "Henry Kelsey Senior Public School",
        "address": "1200 Huntingwood Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7988176895396,
            -79.2770232222959
        ],
        "neighborhood": 129
    },
    {
        "id": 113,
        "name": "Lawrence Park Collegiate Institute",
        "address": "125 Chatsworth Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7222227051645,
            -79.4104390774942
        ],
        "neighborhood": 103,
        "phone": "(416) 393-9500"
    },
    {
        "id": 114,
        "name": "Yorkview Public School",
        "address": "130 Yorkview Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7725736106375,
            -79.4355664221908
        ],
        "neighborhood": 37
    },
    {
        "id": 115,
        "name": "Fenside Public School",
        "address": "131 Fenside Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7645805189835,
            -79.3291265799904
        ],
        "neighborhood": 150
    },
    {
        "id": 116,
        "name": "West Humber Junior Middle School",
        "address": "15 Delsing Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7237549779012,
            -79.5807026757453
        ],
        "neighborhood": 4,
        "phone": "(416) 394-7760"
    },
    {
        "id": 117,
        "name": "Eatonville Junior School",
        "address": "15 Rossburn Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6378407814724,
            -79.5666150696602
        ],
        "neighborhood": 13
    },
    {
        "id": 118,
        "name": "Hunter's Glen Junior Public School",
        "address": "16 Haileybury Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7457122545676,
            -79.2601219894519
        ],
        "neighborhood": 157
    },
    {
        "id": 119,
        "name": "Lord Roberts Junior Public School",
        "address": "165 Lord Roberts Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7413177791394,
            -79.2636373332983
        ],
        "neighborhood": 125
    },
    {
        "id": 120,
        "name": "O'Connor Public School",
        "address": "1665 O'Connor Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7165073254377,
            -79.304152132862
        ],
        "neighborhood": 54
    },
    {
        "id": 121,
        "name": "Pleasant View Middle School",
        "address": "175 Brian Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7874877559234,
            -79.3339032144143
        ],
        "neighborhood": 46
    },
    {
        "id": 122,
        "name": "Smithfield Middle School",
        "address": "175 Mount Olive Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7500111297374,
            -79.5957518765444
        ],
        "neighborhood": 2
    },
    {
        "id": 123,
        "name": "Dallington Public School",
        "address": "18 Dallington Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7771281264675,
            -79.3547553486122
        ],
        "neighborhood": 53
    },
    {
        "id": 124,
        "name": "Pelmo Park Public School",
        "address": "180 Gary Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7120567278162,
            -79.5181161605692
        ],
        "neighborhood": 113
    },
    {
        "id": 125,
        "name": "Rosethorn Junior School",
        "address": "2 Remington Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6601566099814,
            -79.5394518624762
        ],
        "neighborhood": 10
    },
    {
        "id": 126,
        "name": "Dunlace Public School",
        "address": "20 Dunlace Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7624594249816,
            -79.3703573292119
        ],
        "neighborhood": 40
    },
    {
        "id": 127,
        "name": "Donview Middle Health and Wellness Academy",
        "address": "20 Evermede Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7641877197384,
            -79.3314383068706
        ],
        "neighborhood": 150
    },
    {
        "id": 128,
        "name": "George S Henry Academy",
        "address": "200 Graydon Hall Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7643599636777,
            -79.3399200284936
        ],
        "neighborhood": 150
    },
    {
        "id": 129,
        "name": "John D Parker Junior School",
        "address": "202 Mount Olive Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7533579130158,
            -79.5964455179149
        ],
        "neighborhood": 2
    },
    {
        "id": 130,
        "name": "Bessborough Drive Elementary and Middle School",
        "address": "211 Bessborough Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7072147378542,
            -79.3701352031944
        ],
        "neighborhood": 99
    },
    {
        "id": 131,
        "name": "Rosedale Junior Public School",
        "address": "22 South Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6776557315322,
            -79.38168602675
        ],
        "neighborhood": 98,
        "phone": "(416) 393-1330"
    },
    {
        "id": 132,
        "name": "Wellesworth Junior School",
        "address": "225 Wellesworth Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6566373465707,
            -79.5767187454201
        ],
        "neighborhood": 11
    },
    {
        "id": 133,
        "name": "Daystrom Public School",
        "address": "25 Daystrom Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7479469273564,
            -79.5469633014631
        ],
        "neighborhood": 22
    },
    {
        "id": 134,
        "name": "Westway Junior School",
        "address": "25 Poynter Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6908221223255,
            -79.5489933081465
        ],
        "neighborhood": 7
    },
    {
        "id": 135,
        "name": "Beverley Heights Middle School",
        "address": "26 Troutbrooke Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7330245969924,
            -79.5047717197305
        ],
        "neighborhood": 154
    },
    {
        "id": 136,
        "name": "Cliffside Public School",
        "address": "27 East Haven Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7048959315468,
            -79.2503830440116
        ],
        "neighborhood": 122
    },
    {
        "id": 137,
        "name": "George Anderson Public School",
        "address": "30 George Anderson Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7054535329767,
            -79.4789480608335
        ],
        "neighborhood": 30
    },
    {
        "id": 138,
        "name": "Rivercrest Junior School",
        "address": "30 Harefield Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.729716180075,
            -79.5695177435715
        ],
        "neighborhood": 3,
        "phone": "(416) 394-7920"
    },
    {
        "id": 139,
        "name": "Parkfield Junior School",
        "address": "31 Redgrave Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6822877769246,
            -79.5697578514709
        ],
        "neighborhood": 7
    },
    {
        "id": 140,
        "name": "Shoreham Public Sports and Wellness Academy",
        "address": "31 Shoreham Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7687995439219,
            -79.5173879692824
        ],
        "neighborhood": 27
    },
    {
        "id": 141,
        "name": "Oakdale Park Middle School",
        "address": "315 Grandravine Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7474650745775,
            -79.5119920580985
        ],
        "neighborhood": 25
    },
    {
        "id": 142,
        "name": "Calico Public School",
        "address": "35 Calico Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7379061764681,
            -79.5035920382592
        ],
        "neighborhood": 25
    },
    {
        "id": 143,
        "name": "Valleyfield Junior School",
        "address": "35 Saskatoon Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6942865155451,
            -79.5384444417594
        ],
        "neighborhood": 8
    },
    {
        "id": 144,
        "name": "Hilltop Middle School",
        "address": "35 Trehorne Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6894627380415,
            -79.53306700719
        ],
        "neighborhood": 8
    },
    {
        "id": 145,
        "name": "Claireville Junior School",
        "address": "350 Silverstone Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7480114029654,
            -79.5991007205673
        ],
        "neighborhood": 2
    },
    {
        "id": 146,
        "name": "Maurice Cody Junior Public School",
        "address": "364 Belsize Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7048143191022,
            -79.3776790176605
        ],
        "neighborhood": 99,
        "phone": "(416) 393-9240"
    },
    {
        "id": 147,
        "name": "Woburn Junior Public School",
        "address": "40 Dormington Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.779502795504,
            -79.2270016649434
        ],
        "neighborhood": 142
    },
    {
        "id": 148,
        "name": "Broadacres Junior School",
        "address": "45 Crendon Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6480667176351,
            -79.5720207319543
        ],
        "neighborhood": 13
    },
    {
        "id": 149,
        "name": "The Elms Junior Middle School",
        "address": "45 Golfdown Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.722227297768,
            -79.5521137885613
        ],
        "neighborhood": 5
    },
    {
        "id": 150,
        "name": "Willow Park Junior Public School",
        "address": "45 Windover Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7611980953357,
            -79.2095785361357
        ],
        "neighborhood": 141
    },
    {
        "id": 151,
        "name": "Cresthaven Public School",
        "address": "46 Cresthaven Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7972191365557,
            -79.3635402543448
        ],
        "neighborhood": 48
    },
    {
        "id": 152,
        "name": "Bellmere Junior Public School",
        "address": "470 Brimorton Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7719692863916,
            -79.23514687523
        ],
        "neighborhood": 142
    },
    {
        "id": 153,
        "name": "A Y Jackson Secondary School",
        "address": "50 Francine Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8052613014219,
            -79.3665552934095
        ],
        "neighborhood": 48,
        "phone": "(416) 395-3140"
    },
    {
        "id": 154,
        "name": "Elmlea Junior School",
        "address": "50 Hadrian Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7159386194401,
            -79.5498701970545
        ],
        "neighborhood": 5
    },
    {
        "id": 155,
        "name": "Lynnwood Heights Junior Public School",
        "address": "50 Southlawn Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7965807575644,
            -79.2913478664802
        ],
        "neighborhood": 148,
        "phone": "(416) 396-6430"
    },
    {
        "id": 156,
        "name": "Stilecroft Public School",
        "address": "50 Stilecroft Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7510558213298,
            -79.4932050987089
        ],
        "neighborhood": 27
    },
    {
        "id": 157,
        "name": "Vradenburg Junior Public School",
        "address": "50 Vradenberg Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7743422666974,
            -79.3082862993578
        ],
        "neighborhood": 118
    },
    {
        "id": 158,
        "name": "Martingrove Collegiate Institute",
        "address": "50 Winterton Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6733827722511,
            -79.5607396403649
        ],
        "neighborhood": 10
    },
    {
        "id": 159,
        "name": "Chine Drive Public School",
        "address": "51 Chine Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7099825934536,
            -79.2417968940952
        ],
        "neighborhood": 123
    },
    {
        "id": 160,
        "name": "Melody Village Junior School",
        "address": "520 Silverstone Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7381347518027,
            -79.5948425834357
        ],
        "neighborhood": 2
    },
    {
        "id": 161,
        "name": "Lambton-Kingsway Junior Middle School",
        "address": "525 Prince Edward Dr N",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6586572209274,
            -79.5093148073344
        ],
        "neighborhood": 15
    },
    {
        "id": 162,
        "name": "Arbor Glen Public School",
        "address": "55 Freshmeadow Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8094863867353,
            -79.3557094447754
        ],
        "neighborhood": 48
    },
    {
        "id": 163,
        "name": "Alternative Scarborough Education 1",
        "address": "60 Brimorton Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.766645247168,
            -79.2547962816571
        ],
        "neighborhood": 156
    },
    {
        "id": 164,
        "name": "St Andrews Public School",
        "address": "60 Brimorton Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.766645247168,
            -79.2547962816571
        ],
        "neighborhood": 156
    },
    {
        "id": 165,
        "name": "George P Mackie Junior Public School",
        "address": "60 Heathfield Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7393273081079,
            -79.2119939725128
        ],
        "neighborhood": 139
    },
    {
        "id": 166,
        "name": "Briarcrest Junior School",
        "address": "60 Wellesworth Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6664657716455,
            -79.5800752804407
        ],
        "neighborhood": 11
    },
    {
        "id": 167,
        "name": "Bendale Junior Public School",
        "address": "61 Benshire Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7625671183697,
            -79.2448802576444
        ],
        "neighborhood": 142
    },
    {
        "id": 168,
        "name": "Seneca Hill Public School",
        "address": "625 Seneca Hill Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7908704223355,
            -79.3502969872857
        ],
        "neighborhood": 47
    },
    {
        "id": 169,
        "name": "Hollycrest Middle School",
        "address": "630 Renforth Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.656104223852,
            -79.5827078548947
        ],
        "neighborhood": 11
    },
    {
        "id": 170,
        "name": "Princess Margaret Junior School",
        "address": "65 Tromley Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6712220300167,
            -79.5590577552409
        ],
        "neighborhood": 10
    },
    {
        "id": 171,
        "name": "Brookhaven Public School",
        "address": "70 Brookhaven Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7025063022277,
            -79.4956943989555
        ],
        "neighborhood": 28
    },
    {
        "id": 172,
        "name": "Beaumonde Heights Junior Middle School",
        "address": "70 Monterrey Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7426035565314,
            -79.5747551861525
        ],
        "neighborhood": 2
    },
    {
        "id": 173,
        "name": "West Preparatory Junior Public School",
        "address": "70 Ridge Hill Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7026161891079,
            -79.4329440583326
        ],
        "neighborhood": 102,
        "phone": "(416) 393-1633"
    },
    {
        "id": 174,
        "name": "Park Lawn Junior Middle School",
        "address": "71 Ballacaine Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6377066076306,
            -79.4964469164461
        ],
        "neighborhood": 16
    },
    {
        "id": 175,
        "name": "Churchill Heights Public School",
        "address": "749 Brimorton Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7731919492023,
            -79.2243167892305
        ],
        "neighborhood": 142
    },
    {
        "id": 176,
        "name": "Bennington Heights Elementary School",
        "address": "76 Bennington Heights Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6939854007409,
            -79.3687780820258
        ],
        "neighborhood": 56
    },
    {
        "id": 177,
        "name": "Three Valleys Public School",
        "address": "76 Three Valleys Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7506806575244,
            -79.3376043958259
        ],
        "neighborhood": 149
    },
    {
        "id": 178,
        "name": "Lester B Pearson Collegiate Institute",
        "address": "150 Tapscott Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8033727841338,
            -79.2258580493407
        ],
        "neighborhood": 145
    },
    {
        "id": 179,
        "name": "Roden Public School",
        "address": "151 Hiawatha Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6738732738778,
            -79.3230764862029
        ],
        "neighborhood": 65,
        "phone": "(416) 393-9555"
    },
    {
        "id": 180,
        "name": "Birch Cliff Public School",
        "address": "1650 Kingston Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6919887241508,
            -79.2655686242961
        ],
        "neighborhood": 122
    },
    {
        "id": 181,
        "name": "West Humber Collegiate Institute",
        "address": "1675 Martin Grove Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7309224004354,
            -79.5867053925528
        ],
        "neighborhood": 2,
        "phone": "(416) 394-7570"
    },
    {
        "id": 182,
        "name": "Diefenbaker Elementary School",
        "address": "175 Plains Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6950420299431,
            -79.3316401743941
        ],
        "neighborhood": 58
    },
    {
        "id": 183,
        "name": "Glen Ames Senior Public School",
        "address": "18 Williamson Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6741488615009,
            -79.2984421909583
        ],
        "neighborhood": 63,
        "phone": "(416) 393-1800"
    },
    {
        "id": 184,
        "name": "Galloway Road Public School",
        "address": "192 Galloway Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7650173036954,
            -79.1966222950893
        ],
        "neighborhood": 136
    },
    {
        "id": 185,
        "name": "C D Farquharson Junior Public School",
        "address": "1965 Brimley Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.784467159758,
            -79.2661055358191
        ],
        "neighborhood": 128
    },
    {
        "id": 186,
        "name": "North Kipling Junior Middle School",
        "address": "2 Rowntree Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7520919012962,
            -79.5844719859096
        ],
        "neighborhood": 2
    },
    {
        "id": 187,
        "name": "Gulfstream Public School",
        "address": "20 Gulfstream Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7390779789322,
            -79.5420098021244
        ],
        "neighborhood": 22
    },
    {
        "id": 188,
        "name": "Rene Gordon Health and Wellness Academy",
        "address": "20 Karen Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7619030433066,
            -79.3401430648432
        ],
        "neighborhood": 150
    },
    {
        "id": 189,
        "name": "Fleming Public School",
        "address": "20 Littles Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8154347835423,
            -79.2033845823469
        ],
        "neighborhood": 146
    },
    {
        "id": 190,
        "name": "William Lyon Mackenzie Collegiate Institute",
        "address": "20 Tillplain Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.753470958116,
            -79.4618941625427
        ],
        "neighborhood": 155,
        "phone": "(416) 395-3330"
    },
    {
        "id": 191,
        "name": "Leaside High School",
        "address": "200 Hanna Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7110428289168,
            -79.3725387473782
        ],
        "neighborhood": 99
    },
    {
        "id": 192,
        "name": "Highland Middle School",
        "address": "201 Cliffwood Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8068603785032,
            -79.3554480856806
        ],
        "neighborhood": 48
    },
    {
        "id": 193,
        "name": "Rippleton Public School",
        "address": "21 Rippleton Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7409048373993,
            -79.3601204660189
        ],
        "neighborhood": 42
    },
    {
        "id": 194,
        "name": "Elia Middle School",
        "address": "215 Sentinel Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7537993176252,
            -79.4984583080641
        ],
        "neighborhood": 27
    },
    {
        "id": 195,
        "name": "Millwood Junior School",
        "address": "222 Mill Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6334096401878,
            -79.5769148190181
        ],
        "neighborhood": 12
    },
    {
        "id": 196,
        "name": "Woburn Collegiate Institute",
        "address": "2222 Ellesmere Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7781651122844,
            -79.2284585858987
        ],
        "neighborhood": 142,
        "phone": "(416) 396-4575"
    },
    {
        "id": 197,
        "name": "Guildwood Junior Public School",
        "address": "225 Livingston Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7508210711606,
            -79.1999866837748
        ],
        "neighborhood": 140
    },
    {
        "id": 198,
        "name": "Willowdale Middle School",
        "address": "225 Senlac Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7697752168173,
            -79.4260889839917
        ],
        "neighborhood": 37
    },
    {
        "id": 199,
        "name": "Edgewood Public School",
        "address": "230 Birkdale Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7663054576185,
            -79.2658120339035
        ],
        "neighborhood": 156
    },
    {
        "id": 200,
        "name": "J R Wilcox Community School",
        "address": "231 Ava Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6949467937453,
            -79.4363052648149
        ],
        "neighborhood": 106
    },
    {
        "id": 201,
        "name": "St Margaret's Public School",
        "address": "235 Galloway Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7679505557947,
            -79.195821221175
        ],
        "neighborhood": 136
    },
    {
        "id": 202,
        "name": "Alexander Muir/Gladstone Ave Junior and Senior Public School",
        "address": "108 Gladstone Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6460212506421,
            -79.4288472631571
        ],
        "neighborhood": 84,
        "phone": "(416) 393-9140"
    },
    {
        "id": 203,
        "name": "Williamson Road Junior Public School",
        "address": "24 Williamson Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6745110572076,
            -79.2974698038611
        ],
        "neighborhood": 63,
        "phone": "(416) 393-1740"
    },
    {
        "id": 204,
        "name": "Stephen Leacock Collegiate Institute",
        "address": "2450 Birchmount Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7851820434334,
            -79.3021342614181
        ],
        "neighborhood": 118,
        "phone": "(416) 396-8000"
    },
    {
        "id": 205,
        "name": "John Buchan Senior Public School",
        "address": "2450 Birchmount Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7851820434334,
            -79.3021342614181
        ],
        "neighborhood": 118
    },
    {
        "id": 206,
        "name": "Forest Manor Public School",
        "address": "25 Forest Manor Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7710427399232,
            -79.3430668038294
        ],
        "neighborhood": 53
    },
    {
        "id": 207,
        "name": "Muirhead Public School",
        "address": "25 Muirhead Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7788840209192,
            -79.3374501774332
        ],
        "neighborhood": 46,
        "phone": "(416) 395-2710"
    },
    {
        "id": 208,
        "name": "King George Junior Public School",
        "address": "25 Rexford Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6631626964079,
            -79.4868867512535
        ],
        "neighborhood": 89
    },
    {
        "id": 209,
        "name": "Joseph Brant Public School",
        "address": "270 Manse Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7670440318193,
            -79.1754975507903
        ],
        "neighborhood": 136
    },
    {
        "id": 210,
        "name": "Centennial Road Junior Public School",
        "address": "271 Centennial Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7869622763272,
            -79.1500238078626
        ],
        "neighborhood": 133
    },
    {
        "id": 211,
        "name": "Dorset Park Public School",
        "address": "28 Blaisdale Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7501910914087,
            -79.2797350588123
        ],
        "neighborhood": 126
    },
    {
        "id": 212,
        "name": "Woodbine Middle School",
        "address": "2900 Don Mills Rd E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7824288154923,
            -79.349385410988
        ],
        "neighborhood": 47,
        "phone": "(416) 395-3110"
    },
    {
        "id": 213,
        "name": "Silverthorn Collegiate Institute",
        "address": "291 Mill Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6378359132721,
            -79.5803885455116
        ],
        "neighborhood": 12
    },
    {
        "id": 214,
        "name": "Rouge Valley Public School",
        "address": "30 Durnford Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7993862553854,
            -79.1512873936937
        ],
        "neighborhood": 134
    },
    {
        "id": 215,
        "name": "General Crerar Public School",
        "address": "30 McGregor Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7456867654999,
            -79.2795776619808
        ],
        "neighborhood": 126
    },
    {
        "id": 216,
        "name": "F H Miller Junior Public School",
        "address": "300 Caledonia Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6840057733305,
            -79.458898094007
        ],
        "neighborhood": 109
    },
    {
        "id": 217,
        "name": "Georges Vanier Secondary School",
        "address": "3000 Don Mills Rd E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7831172284439,
            -79.3509063859672
        ],
        "neighborhood": 47
    },
    {
        "id": 218,
        "name": "Maple Leaf Public School",
        "address": "301 Culford Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7148506431932,
            -79.490275221205
        ],
        "neighborhood": 29
    },
    {
        "id": 219,
        "name": "Northlea Elementary and Middle School",
        "address": "305 Rumsey Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7144436649986,
            -79.3696628900613
        ],
        "neighborhood": 99
    },
    {
        "id": 220,
        "name": "H A Halbert Junior Public School",
        "address": "25 Halbert Pl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7276495960022,
            -79.2317360671938
        ],
        "neighborhood": 123
    },
    {
        "id": 221,
        "name": "Rolph Road Elementary School",
        "address": "31 Rolph Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6998541229578,
            -79.3660007150713
        ],
        "neighborhood": 56
    },
    {
        "id": 222,
        "name": "Fairmount Public School",
        "address": "31 Sloley Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7197580924624,
            -79.2308941806286
        ],
        "neighborhood": 123
    },
    {
        "id": 223,
        "name": "Don Valley Middle School",
        "address": "3100 Don Mills Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7895329062794,
            -79.3549665618627
        ],
        "neighborhood": 47,
        "phone": "(416) 395-3010"
    },
    {
        "id": 224,
        "name": "Sir Alexander Mackenzie Senior Public School",
        "address": "33 Heather Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7893650361485,
            -79.2731724486555
        ],
        "neighborhood": 128
    },
    {
        "id": 225,
        "name": "Emery Collegiate Institute",
        "address": "3395 Weston Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7487227091093,
            -79.5395569845548
        ],
        "neighborhood": 22
    },
    {
        "id": 226,
        "name": "Lescon Public School",
        "address": "34 Lescon Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7808296263161,
            -79.3577389782403
        ],
        "neighborhood": 53
    },
    {
        "id": 227,
        "name": "C W Jefferys Collegiate Institute",
        "address": "340 Sentinel Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7582792583815,
            -79.4999125095246
        ],
        "neighborhood": 27
    },
    {
        "id": 228,
        "name": "Henry Hudson Senior Public School",
        "address": "350 Orton Park Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7777371786683,
            -79.2144673665189
        ],
        "neighborhood": 135
    },
    {
        "id": 229,
        "name": "Runnymede Junior and Senior Public School",
        "address": "357 Runnymede Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6559293055801,
            -79.4774817133393
        ],
        "neighborhood": 88,
        "phone": "(416) 393-9055"
    },
    {
        "id": 230,
        "name": "Windfields Middle School",
        "address": "375 Banbury Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7561115796205,
            -79.3705792903782
        ],
        "neighborhood": 40
    },
    {
        "id": 231,
        "name": "Oakridge Junior Public School",
        "address": "110 Byng Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6954675997844,
            -79.2815887508899
        ],
        "neighborhood": 121,
        "phone": "(416) 396-6505"
    },
    {
        "id": 232,
        "name": "Buchanan Public School",
        "address": "4 Bucannan Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7514123659806,
            -79.2999282686155
        ],
        "neighborhood": 119
    },
    {
        "id": 233,
        "name": "Adam Beck Junior Public School",
        "address": "400 Scarborough Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6831518038006,
            -79.2884878925608
        ],
        "neighborhood": 62,
        "phone": "(416) 393-1682"
    },
    {
        "id": 234,
        "name": "Mill Valley Junior School",
        "address": "411 Mill Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6441893872147,
            -79.5869715708541
        ],
        "neighborhood": 13
    },
    {
        "id": 235,
        "name": "John McCrae Public School",
        "address": "431 McCowan Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7440442493865,
            -79.2398865092258
        ],
        "neighborhood": 138
    },
    {
        "id": 236,
        "name": "Ancaster Public School",
        "address": "44 Ancaster Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.732866171726,
            -79.4669926271694
        ],
        "neighborhood": 155
    },
    {
        "id": 237,
        "name": "Albion Heights Junior Middle School",
        "address": "45 Lynmont Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7313882639787,
            -79.5943154958931
        ],
        "neighborhood": 2
    },
    {
        "id": 238,
        "name": "Sunny View Junior and Senior Public School",
        "address": "450 Blythwood Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7198437625729,
            -79.3873376052873
        ],
        "neighborhood": 173,
        "phone": "(416) 393-9275"
    },
    {
        "id": 239,
        "name": "Brown Junior Public School",
        "address": "454 Avenue Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6849129181957,
            -79.4013122747142
        ],
        "neighborhood": 97,
        "phone": "(416) 393-1560"
    },
    {
        "id": 240,
        "name": "J G Workman Public School",
        "address": "487 Birchmount Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7071912568456,
            -79.2671279279676
        ],
        "neighborhood": 120,
        "phone": "(416) 396-6365"
    },
    {
        "id": 241,
        "name": "York Mills Collegiate Institute",
        "address": "490 York Mills Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7515290541848,
            -79.3735238955731
        ],
        "neighborhood": 40,
        "phone": "(416) 395-3340"
    },
    {
        "id": 242,
        "name": "Etienne Brule Junior School",
        "address": "50 Cloverhill Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.63561874071,
            -79.4896844559483
        ],
        "neighborhood": 16
    },
    {
        "id": 243,
        "name": "Norman Ingram Public School",
        "address": "50 Duncairn Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7399524524339,
            -79.3496061486394
        ],
        "neighborhood": 42
    },
    {
        "id": 244,
        "name": "Cedarbrae Collegiate Institute",
        "address": "550 Markham Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7563408988376,
            -79.2259248559894
        ],
        "neighborhood": 141
    },
    {
        "id": 245,
        "name": "Seneca School",
        "address": "580 Rathburn Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.650933953139,
            -79.582545826113
        ],
        "neighborhood": 13
    },
    {
        "id": 246,
        "name": "William G Miller Public School",
        "address": "60 Bennett Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7685135568036,
            -79.1650340052142
        ],
        "neighborhood": 133
    },
    {
        "id": 247,
        "name": "North Agincourt Junior Public School",
        "address": "60 Moran Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7964537061583,
            -79.2762127949402
        ],
        "neighborhood": 129
    },
    {
        "id": 248,
        "name": "Rockford Public School",
        "address": "60 Rockford Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7858005190036,
            -79.4524414110058
        ],
        "neighborhood": 35
    },
    {
        "id": 249,
        "name": "Jesse Ketchum Junior and Senior Public School",
        "address": "61 Davenport Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6729826224861,
            -79.3921392257859
        ],
        "neighborhood": 169,
        "phone": "(416) 393-1530"
    },
    {
        "id": 250,
        "name": "Humber Valley Village Junior Middle School",
        "address": "65 Hartfield Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6654435061721,
            -79.5265666084256
        ],
        "neighborhood": 9
    },
    {
        "id": 251,
        "name": "Etobicoke School of the Arts",
        "address": "675 Royal York Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6307322050172,
            -79.5041485169903
        ],
        "neighborhood": 16,
        "phone": "(416) 394-6910"
    },
    {
        "id": 252,
        "name": "Downsview Secondary School",
        "address": "7 Hawksdale Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7308678403515,
            -79.4795174892873
        ],
        "neighborhood": 29
    },
    {
        "id": 253,
        "name": "John G Diefenbaker Public School",
        "address": "70 Dean Park Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8022950282646,
            -79.171869534813
        ],
        "neighborhood": 134
    },
    {
        "id": 254,
        "name": "Duke of Connaught Junior and Senior Public School",
        "address": "70 Woodfield Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6661955194459,
            -79.3219578466597
        ],
        "neighborhood": 65,
        "phone": "(416) 393-9455"
    },
    {
        "id": 255,
        "name": "Tecumseh Senior Public School",
        "address": "720 Scarborough Golf Club Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7629070424859,
            -79.2167270408446
        ],
        "neighborhood": 141
    },
    {
        "id": 256,
        "name": "Norman Cook Junior Public School",
        "address": "725 Danforth Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7190391303319,
            -79.2577951258558
        ],
        "neighborhood": 124
    },
    {
        "id": 257,
        "name": "Golf Road Junior Public School",
        "address": "730 Scarborough Golf Club Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7639036098219,
            -79.2168876729568
        ],
        "neighborhood": 141
    },
    {
        "id": 258,
        "name": "Ellesmere-Statton Public School",
        "address": "739 Ellesmere Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7636236123759,
            -79.2875719983282
        ],
        "neighborhood": 126,
        "phone": "(416) 396-6225"
    },
    {
        "id": 259,
        "name": "Stanley Public School",
        "address": "75 Stanley Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7418311837881,
            -79.5178270423286
        ],
        "neighborhood": 25
    },
    {
        "id": 260,
        "name": "Westview Centennial Secondary School",
        "address": "755 Oakdale Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7523976347813,
            -79.5250905310153
        ],
        "neighborhood": 25,
        "phone": "(416) 395-3320"
    },
    {
        "id": 261,
        "name": "Meadowvale Public School",
        "address": "761 Meadowvale Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7955110107972,
            -79.1640681823792
        ],
        "neighborhood": 134
    },
    {
        "id": 262,
        "name": "Forest Hill Junior and Senior Public School",
        "address": "78 Dunloe Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6953762569543,
            -79.4139385899
        ],
        "neighborhood": 101,
        "phone": "(416) 393-9335"
    },
    {
        "id": 263,
        "name": "Mason Road Junior Public School",
        "address": "78 Mason Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7390564379521,
            -79.2256545935691
        ],
        "neighborhood": 139
    },
    {
        "id": 264,
        "name": "Bowmore Road Junior and Senior Public School",
        "address": "80 Bowmore Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.676063664796,
            -79.3144917153579
        ],
        "neighborhood": 64,
        "phone": "(416) 393-9450"
    },
    {
        "id": 265,
        "name": "Harrison Public School",
        "address": "81 Harrison Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7573684747214,
            -79.3773086129257
        ],
        "neighborhood": 40
    },
    {
        "id": 266,
        "name": "Northern Secondary School",
        "address": "851 Mount Pleasant Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7105370975811,
            -79.3901642998392
        ],
        "neighborhood": 173,
        "phone": "(416) 393-0270"
    },
    {
        "id": 267,
        "name": "Etobicoke Collegiate Institute",
        "address": "86 Montgomery Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6500842008403,
            -79.522296213866
        ],
        "neighborhood": 158
    },
    {
        "id": 268,
        "name": "Ionview Public School",
        "address": "90 Ionview Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7374516240236,
            -79.2743179577449
        ],
        "neighborhood": 125
    },
    {
        "id": 269,
        "name": "Kingslake Public School",
        "address": "90 Kingslake Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7847819082729,
            -79.3455302477626
        ],
        "neighborhood": 46
    },
    {
        "id": 270,
        "name": "Robert Service Senior Public School",
        "address": "945 Danforth Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7290251523698,
            -79.2511781787807
        ],
        "neighborhood": 124
    },
    {
        "id": 271,
        "name": "Westmount Junior School",
        "address": "95 Chapman Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6890961288899,
            -79.519659304979
        ],
        "neighborhood": 8,
        "phone": "(416) 394-7720"
    },
    {
        "id": 272,
        "name": "Regal Road Junior Public School",
        "address": "95 Regal Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6737751677408,
            -79.4400632870577
        ],
        "neighborhood": 92,
        "phone": "(416) 393-1390"
    },
    {
        "id": 273,
        "name": "Sloane Public School",
        "address": "110 Sloane Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7312122256091,
            -79.3103396611409
        ],
        "neighborhood": 43
    },
    {
        "id": 274,
        "name": "Chester Elementary School",
        "address": "115 Gowan Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6876023807709,
            -79.3517099846563
        ],
        "neighborhood": 57
    },
    {
        "id": 275,
        "name": "Selwyn Elementary School",
        "address": "1 Selwyn Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7084396528702,
            -79.3063259433172
        ],
        "neighborhood": 54
    },
    {
        "id": 276,
        "name": "George Peck Public School",
        "address": "1 Wayne Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7382584753535,
            -79.2936351945354
        ],
        "neighborhood": 125
    },
    {
        "id": 277,
        "name": "Dublin Heights Elementary and Middle School",
        "address": "100 Bainbridge Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7491483093568,
            -79.4470247426388
        ],
        "neighborhood": 33
    },
    {
        "id": 278,
        "name": "Queen Victoria Public School",
        "address": "100 Close Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6365094905393,
            -79.435320697841
        ],
        "neighborhood": 85
    },
    {
        "id": 279,
        "name": "York Humber High School",
        "address": "100 Emmett Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6885691951614,
            -79.506177459366
        ],
        "neighborhood": 8,
        "phone": "(416) 394-3280"
    },
    {
        "id": 280,
        "name": "Pauline Junior Public School",
        "address": "100 Pauline Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6624891075822,
            -79.4391436705617
        ],
        "neighborhood": 172,
        "phone": "(416) 393-9360"
    },
    {
        "id": 281,
        "name": "Earl Haig Secondary School",
        "address": "100 Princess Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7696090327771,
            -79.4059659483565
        ],
        "neighborhood": 151,
        "phone": "(416) 393-1640"
    },
    {
        "id": 282,
        "name": "Earl Grey Senior Public School",
        "address": "100 Strathcona Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6768438820104,
            -79.3405244209135
        ],
        "neighborhood": 69,
        "phone": "(416) 393-9545"
    },
    {
        "id": 283,
        "name": "William Burgess Elementary School",
        "address": "100 Torrens Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6919277284887,
            -79.348157720646
        ],
        "neighborhood": 57
    },
    {
        "id": 284,
        "name": "Secord Elementary School",
        "address": "101 Barrington Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6923788956395,
            -79.3018312433153
        ],
        "neighborhood": 66
    },
    {
        "id": 285,
        "name": "Glen Park Public School",
        "address": "101 Englemount Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7132238247354,
            -79.4357473261606
        ],
        "neighborhood": 31
    },
    {
        "id": 286,
        "name": "Kew Beach Junior Public School",
        "address": "101 Kippendavie Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6684642406022,
            -79.3027273153273
        ],
        "neighborhood": 63,
        "phone": "(416) 393-1810"
    },
    {
        "id": 287,
        "name": "Wexford Collegiate School for the Arts",
        "address": "1176 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7461595742932,
            -79.3067953750859
        ],
        "neighborhood": 119,
        "phone": "(416) 396-6874"
    },
    {
        "id": 288,
        "name": "Birch Cliff Heights Public School",
        "address": "120 Highview Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7017413937537,
            -79.259816624788
        ],
        "neighborhood": 122,
        "phone": "(416) 396-6065"
    },
    {
        "id": 289,
        "name": "Pierre Laporte Middle School",
        "address": "1270 Wilson Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7250745328027,
            -79.4921243121893
        ],
        "neighborhood": 154
    },
    {
        "id": 290,
        "name": "William G Davis Junior Public School",
        "address": "128 East Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7850464257848,
            -79.1344743650252
        ],
        "neighborhood": 143
    },
    {
        "id": 291,
        "name": "Fern Avenue Junior and Senior Public School",
        "address": "128 Fern Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6451803159495,
            -79.4461128419154
        ],
        "neighborhood": 86,
        "phone": "(416) 393-9130"
    },
    {
        "id": 292,
        "name": "Lynngate Junior Public School",
        "address": "129 Cass Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7766766424049,
            -79.300660254809
        ],
        "neighborhood": 118
    },
    {
        "id": 293,
        "name": "John Ross Robertson Junior Public School",
        "address": "130 Glengrove Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7183259803294,
            -79.4088642991292
        ],
        "neighborhood": 103,
        "phone": "(416) 393-9400"
    },
    {
        "id": 294,
        "name": "St Andrew's Middle School",
        "address": "131 Fenn Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7515973528757,
            -79.3903297628128
        ],
        "neighborhood": 40
    },
    {
        "id": 295,
        "name": "Maryvale Public School",
        "address": "1325 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.754822068202,
            -79.307836183235
        ],
        "neighborhood": 119
    },
    {
        "id": 296,
        "name": "Balmy Beach Community School",
        "address": "14 Pine Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6764359194877,
            -79.289826941499
        ],
        "neighborhood": 63,
        "phone": "(416) 393-1565"
    },
    {
        "id": 297,
        "name": "Perth Avenue Junior Public School",
        "address": "14 Ruskin Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6628313614165,
            -79.4524196858968
        ],
        "neighborhood": 90,
        "phone": "(416) 393-1410"
    },
    {
        "id": 298,
        "name": "Sheppard Public School",
        "address": "1430 Sheppard Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7454243556118,
            -79.4882606578029
        ],
        "neighborhood": 25
    },
    {
        "id": 299,
        "name": "Baycrest Public School",
        "address": "145 Baycrest Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7266057772143,
            -79.4442515073691
        ],
        "neighborhood": 32
    },
    {
        "id": 300,
        "name": "Victoria Park Elementary School",
        "address": "145 Tiago Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.712689182329,
            -79.2981507568545
        ],
        "neighborhood": 54
    },
    {
        "id": 301,
        "name": "Armour Heights Public School",
        "address": "148 Wilson Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7409100432478,
            -79.4195222787578
        ],
        "neighborhood": 39
    },
    {
        "id": 302,
        "name": "Humewood Community School",
        "address": "15 Cherrywood Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6866350930218,
            -79.4280204516617
        ],
        "neighborhood": 106
    },
    {
        "id": 303,
        "name": "Earl Haig Public School",
        "address": "15 Earl Haig Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6813314530514,
            -79.3212504675318
        ],
        "neighborhood": 65,
        "phone": "(416) 393-1640"
    },
    {
        "id": 304,
        "name": "Newtonbrook Secondary School",
        "address": "155 Hilda Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7935491354672,
            -79.4262425900561
        ],
        "neighborhood": 36,
        "phone": "(416) 395-3280"
    },
    {
        "id": 305,
        "name": "Bendale Business and Technical Institute",
        "address": "1555 Midland Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.755339758132,
            -79.2647430887907
        ],
        "neighborhood": 156
    },
    {
        "id": 306,
        "name": "Subway Academy I",
        "address": "16 Phin Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6791402347004,
            -79.3366360566295
        ],
        "neighborhood": 69,
        "phone": "(416) 393-9466"
    },
    {
        "id": 307,
        "name": "Elizabeth Simcoe Junior Public School",
        "address": "166 Sylvan Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7381519615688,
            -79.2060348701063
        ],
        "neighborhood": 139
    },
    {
        "id": 308,
        "name": "Dennis Avenue Community School",
        "address": "17 Dennis Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6844195398894,
            -79.4872863165976
        ],
        "neighborhood": 115
    },
    {
        "id": 309,
        "name": "Avondale Elementary Alternative School",
        "address": "171 Avondale Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7596784143197,
            -79.4000020943236
        ],
        "neighborhood": 153
    },
    {
        "id": 310,
        "name": "Avondale Secondary Alternative School",
        "address": "24 Silverview Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7863065106423,
            -79.4118431542439
        ],
        "neighborhood": 50
    },
    {
        "id": 311,
        "name": "Richview Collegiate Institute",
        "address": "1738 Islington Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6786465333719,
            -79.5395009465865
        ],
        "neighborhood": 7
    },
    {
        "id": 312,
        "name": "Cordella Junior Public School",
        "address": "175 Cordella Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6790700932118,
            -79.4875854399739
        ],
        "neighborhood": 115
    },
    {
        "id": 313,
        "name": "Gracefield Public School",
        "address": "177 Gracefield Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.709018391832,
            -79.4914064041562
        ],
        "neighborhood": 29
    },
    {
        "id": 314,
        "name": "Morse Street Junior Public School",
        "address": "180 Carlaw Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6601669225421,
            -79.3401666940738
        ],
        "neighborhood": 68,
        "phone": "(416) 393-9494"
    },
    {
        "id": 315,
        "name": "Queen Alexandra Middle School",
        "address": "181 Broadview Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6616429603441,
            -79.3500911323149
        ],
        "neighborhood": 72,
        "phone": "(416) 393-9535"
    },
    {
        "id": 316,
        "name": "Churchill Public School",
        "address": "188 Churchill Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7707536046539,
            -79.4270361642829
        ],
        "neighborhood": 37
    },
    {
        "id": 317,
        "name": "Gledhill Junior Public School",
        "address": "2 Gledhill Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6875483306854,
            -79.3092864659493
        ],
        "neighborhood": 60,
        "phone": "(416) 393-1745"
    },
    {
        "id": 318,
        "name": "Keelesdale Junior Public School",
        "address": "200 Bicknell Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6869571004579,
            -79.4769463100751
        ],
        "neighborhood": 110
    },
    {
        "id": 319,
        "name": "Amesbury Middle School",
        "address": "201 Gracefield Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7084286282992,
            -79.4932822327979
        ],
        "neighborhood": 29
    },
    {
        "id": 320,
        "name": "Swansea Junior and Senior Public School",
        "address": "207 Windermere Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6436792914692,
            -79.4770427530375
        ],
        "neighborhood": 87
    },
    {
        "id": 321,
        "name": "Parkdale Collegiate Institute",
        "address": "209 Jameson Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6396575139163,
            -79.4360685050841
        ],
        "neighborhood": 85,
        "phone": "(416) 393-9000"
    },
    {
        "id": 322,
        "name": "Blake Street Junior Public School",
        "address": "21 Boultbee Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6718063689636,
            -79.3384762500832
        ],
        "neighborhood": 69,
        "phone": "(416) 393-9415"
    },
    {
        "id": 323,
        "name": "East Alternative School of Toronto",
        "address": "21 Boultbee Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6718063689636,
            -79.3384762500832
        ],
        "neighborhood": 69,
        "phone": "(416) 393-8442"
    },
    {
        "id": 324,
        "name": "Cedar Drive Junior Public School",
        "address": "21 Gatesview Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7458528095017,
            -79.215050939271
        ],
        "neighborhood": 139
    },
    {
        "id": 325,
        "name": "Samuel Hearne Middle School",
        "address": "21 Newport Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6950056241564,
            -79.2834799574648
        ],
        "neighborhood": 121
    },
    {
        "id": 326,
        "name": "Cameron Public School",
        "address": "211 Cameron Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7543606984639,
            -79.421251554251
        ],
        "neighborhood": 38
    },
    {
        "id": 327,
        "name": "Highview Public School",
        "address": "22 Highview Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7219510502744,
            -79.4972302699958
        ],
        "neighborhood": 154
    },
    {
        "id": 328,
        "name": "Fairglen Junior Public School",
        "address": "2200 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7849363770968,
            -79.3222381903671
        ],
        "neighborhood": 147
    },
    {
        "id": 329,
        "name": "Eglinton Junior Public School",
        "address": "223 Eglinton Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7079037464755,
            -79.3908468303168
        ],
        "neighborhood": 173,
        "phone": "(416) 393-9315"
    },
    {
        "id": 330,
        "name": "Winston Churchill Collegiate Institute",
        "address": "2239 Lawrence Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7480914839731,
            -79.2783774186933
        ],
        "neighborhood": 126,
        "phone": "(416) 396-6883"
    },
    {
        "id": 331,
        "name": "Garden Avenue Junior Public School",
        "address": "225 Garden Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6432001067781,
            -79.4491237018998
        ],
        "neighborhood": 86,
        "phone": "(416) 393-9165"
    },
    {
        "id": 332,
        "name": "R J Lang Elementary and Middle School",
        "address": "227 Drewry Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7834853825344,
            -79.4265104765386
        ],
        "neighborhood": 36
    },
    {
        "id": 333,
        "name": "Dovercourt Public School",
        "address": "228 Bartlett Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.666735610558,
            -79.4357789540645
        ],
        "neighborhood": 172,
        "phone": "(416) 393-9220"
    },
    {
        "id": 334,
        "name": "Deer Park Junior and Senior Public School",
        "address": "23 Ferndale Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.689651951117,
            -79.3915563848553
        ],
        "neighborhood": 97,
        "phone": "(416) 393-1550"
    },
    {
        "id": 335,
        "name": "Sir John A Macdonald Collegiate Institute",
        "address": "2300 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7870773578969,
            -79.3236705089564
        ],
        "neighborhood": 147,
        "phone": "(416) 396-6793"
    },
    {
        "id": 336,
        "name": "Rawlinson Community School",
        "address": "231 Glenholme Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6839770688827,
            -79.4400434190871
        ],
        "neighborhood": 107
    },
    {
        "id": 337,
        "name": "Greenwood Secondary School",
        "address": "800 Greenwood Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6828387343202,
            -79.3340895606897
        ],
        "neighborhood": 59,
        "phone": "(416) 393-0744"
    },
    {
        "id": 338,
        "name": "School of Life Experience",
        "address": "1 Hanson St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6792807307855,
            -79.3227718925618
        ],
        "neighborhood": 65,
        "phone": "(416) 393-0756"
    },
    {
        "id": 339,
        "name": "John Wanless Junior Public School",
        "address": "245 Fairlawn Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7288686420148,
            -79.4120566947699
        ],
        "neighborhood": 105,
        "phone": "(416) 393-9350"
    },
    {
        "id": 340,
        "name": "Hillmount Public School",
        "address": "245 McNicoll Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7994075938642,
            -79.3507265117258
        ],
        "neighborhood": 47,
        "phone": "(416) 395-2550"
    },
    {
        "id": 341,
        "name": "Withrow Avenue Junior Public School",
        "address": "25 Bain Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.670460460892,
            -79.3521296600971
        ],
        "neighborhood": 68,
        "phone": "(416) 393-9440"
    },
    {
        "id": 342,
        "name": "Quest Alternative Senior School",
        "address": "25 Bain Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.670460460892,
            -79.3521296600971
        ],
        "neighborhood": 68
    },
    {
        "id": 343,
        "name": "Blaydon Public School",
        "address": "25 Blaydon Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.735357222836,
            -79.4862561391138
        ],
        "neighborhood": 154
    },
    {
        "id": 344,
        "name": "Knob Hill Public School",
        "address": "25 Seminole Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7452922846894,
            -79.2497850291991
        ],
        "neighborhood": 157
    },
    {
        "id": 345,
        "name": "Presteign Heights Elementary School",
        "address": "2570 St Clair Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7055433445086,
            -79.3171939752515
        ],
        "neighborhood": 54,
        "phone": "(416) 396-2430"
    },
    {
        "id": 346,
        "name": "North Albion Collegiate Institute",
        "address": "2580 Kipling Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7471415695057,
            -79.5851427788123
        ],
        "neighborhood": 2,
        "phone": "(416) 394-7550"
    },
    {
        "id": 347,
        "name": "Agincourt Collegiate Institute",
        "address": "2621 Midland Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7888738444071,
            -79.2789099586918
        ],
        "neighborhood": 118
    },
    {
        "id": 348,
        "name": "Driftwood Public School",
        "address": "265 Driftwood Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7629711864463,
            -79.5150042552815
        ],
        "neighborhood": 27
    },
    {
        "id": 349,
        "name": "York Memorial Collegiate Institute",
        "address": "2690 Eglinton Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6902787238341,
            -79.4762398021686
        ],
        "neighborhood": 110
    },
    {
        "id": 350,
        "name": "D A Morrison Middle School",
        "address": "271 Gledhill Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6953964611984,
            -79.3116924407793
        ],
        "neighborhood": 60
    },
    {
        "id": 351,
        "name": "David and Mary Thomson Collegiate Institute",
        "address": "2740 Lawrence Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7536065622312,
            -79.2595791300931
        ],
        "neighborhood": 157
    },
    {
        "id": 352,
        "name": "Finch Public School",
        "address": "277 Finch Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7838330777765,
            -79.3949742011282
        ],
        "neighborhood": 152,
        "phone": "(416) 395-2410"
    },
    {
        "id": 353,
        "name": "Humberside Collegiate Institute",
        "address": "280 Quebec Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6599427156923,
            -79.4706428031364
        ],
        "neighborhood": 88,
        "phone": "(416) 393-8122"
    },
    {
        "id": 354,
        "name": "Gordon A Brown Middle School",
        "address": "2800 St Clair Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.707534131345,
            -79.3053702914276
        ],
        "neighborhood": 54
    },
    {
        "id": 355,
        "name": "Hodgson Middle School",
        "address": "282 Davisville Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7010950019854,
            -79.3847932929072
        ],
        "neighborhood": 99,
        "phone": "(416) 393-0390"
    },
    {
        "id": 356,
        "name": "Charles H Best Junior Middle School",
        "address": "285 Wilmington Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7674452465892,
            -79.4586302368016
        ],
        "neighborhood": 34
    },
    {
        "id": 357,
        "name": "Pleasant Public School",
        "address": "288 Pleasant Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7899554182757,
            -79.4345576870743
        ],
        "neighborhood": 36
    },
    {
        "id": 358,
        "name": "Agincourt Junior Public School",
        "address": "29 Lockie Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7882592158345,
            -79.2811623057309
        ],
        "neighborhood": 118,
        "phone": "(416) 396-6010"
    },
    {
        "id": 359,
        "name": "Blantyre Public School",
        "address": "290 Blantyre Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6851000843951,
            -79.2838646531108
        ],
        "neighborhood": 62
    },
    {
        "id": 360,
        "name": "West Hill Public School",
        "address": "299 Morningside Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7726796050533,
            -79.1868844429518
        ],
        "neighborhood": 136,
        "phone": "(416) 396-6864"
    },
    {
        "id": 361,
        "name": "Corvette Junior Public School",
        "address": "30 Corvette Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.726485113649,
            -79.2621597253873
        ],
        "neighborhood": 124
    },
    {
        "id": 362,
        "name": "General Mercer Junior Public School",
        "address": "30 Turnberry Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6789306711569,
            -79.4640229792623
        ],
        "neighborhood": 91,
        "phone": "(416) 393-1414"
    },
    {
        "id": 363,
        "name": "Silverthorn Community School",
        "address": "300 Kane Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6872494240615,
            -79.4694151111639
        ],
        "neighborhood": 110,
        "phone": "(416) 394-3033"
    },
    {
        "id": 364,
        "name": "Montrose Junior Public School",
        "address": "301 Montrose Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6586815852248,
            -79.4188437208257
        ],
        "neighborhood": 80,
        "phone": "(416) 393-9770"
    },
    {
        "id": 365,
        "name": "Delta Alternative Senior School",
        "address": "301 Montrose Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6586815852248,
            -79.4188437208257
        ],
        "neighborhood": 80
    },
    {
        "id": 366,
        "name": "Subway Academy II",
        "address": "64 Baldwin St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6557652368658,
            -79.3957051033565
        ],
        "neighborhood": 78,
        "phone": "(416) 393-1445"
    },
    {
        "id": 367,
        "name": "Wilmington Elementary School",
        "address": "330 Wilmington Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7685583806317,
            -79.4604980247184
        ],
        "neighborhood": 34
    },
    {
        "id": 368,
        "name": "McKee Public School",
        "address": "35 Church Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7741078589817,
            -79.411056249547
        ],
        "neighborhood": 151
    },
    {
        "id": 369,
        "name": "Sunnylea Junior School",
        "address": "35 Glenroy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6424439892717,
            -79.5068732423943
        ],
        "neighborhood": 16
    },
    {
        "id": 370,
        "name": "Lakeshore Collegiate Institute",
        "address": "350 Kipling Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6015634242313,
            -79.5191606370668
        ],
        "neighborhood": 18
    },
    {
        "id": 371,
        "name": "West Hill Collegiate Institute",
        "address": "350 Morningside Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7756684257862,
            -79.1905875661913
        ],
        "neighborhood": 136,
        "phone": "(416) 396-6864"
    },
    {
        "id": 372,
        "name": "Hollywood Public School",
        "address": "360 Hollywood Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7705185087478,
            -79.3918291306292
        ],
        "neighborhood": 52
    },
    {
        "id": 373,
        "name": "Birchmount Park Collegiate Institute",
        "address": "3663 Danforth Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.697753029491,
            -79.2594545253619
        ],
        "neighborhood": 122
    },
    {
        "id": 374,
        "name": "Ossington/Old Orchard Junior Public School",
        "address": "380 Ossington Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6527076700775,
            -79.4225997592765
        ],
        "neighborhood": 83,
        "phone": "(416) 393-0710"
    },
    {
        "id": 375,
        "name": "R H King Academy",
        "address": "3800 St Clair Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7226223410982,
            -79.2374500349757
        ],
        "neighborhood": 123,
        "phone": "(416) 396-5550"
    },
    {
        "id": 376,
        "name": "Allenby Junior Public School",
        "address": "391 St Clements Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7094356428595,
            -79.4127877318278
        ],
        "neighborhood": 103,
        "phone": "(416) 393-9115"
    },
    {
        "id": 377,
        "name": "John Fisher Junior Public School",
        "address": "40 Erskine Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7119282510654,
            -79.3974693799724
        ],
        "neighborhood": 173,
        "phone": "(416) 393-9325"
    },
    {
        "id": 378,
        "name": "Parkside Elementary School",
        "address": "401 Cedarvale Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6994434678363,
            -79.3163183865433
        ],
        "neighborhood": 54
    },
    {
        "id": 379,
        "name": "West Rouge Junior Public School",
        "address": "401 Friendship Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7956184194221,
            -79.1337159199136
        ],
        "neighborhood": 143
    },
    {
        "id": 380,
        "name": "Glenview Senior Public School",
        "address": "401 Rosewell Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7199764434722,
            -79.409524700301
        ],
        "neighborhood": 103,
        "phone": "(416) 393-9390"
    },
    {
        "id": 381,
        "name": "Pape Avenue Junior Public School",
        "address": "220 Langley Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.670351887554,
            -79.3418936177203
        ],
        "neighborhood": 69,
        "phone": "(416) 393-9470"
    },
    {
        "id": 382,
        "name": "Fisherville Senior Public School",
        "address": "425 Patricia Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.784556440757,
            -79.4411616324684
        ],
        "neighborhood": 36
    },
    {
        "id": 383,
        "name": "Islington Junior Middle School",
        "address": "44 Cordova Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6474828161727,
            -79.5279466910799
        ],
        "neighborhood": 158
    },
    {
        "id": 384,
        "name": "Hillcrest Community School",
        "address": "44 Hilton Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6790424542588,
            -79.4158447800033
        ],
        "neighborhood": 96,
        "phone": "(416) 393-9700"
    },
    {
        "id": 385,
        "name": "William J McCordic School",
        "address": "45 Balfour Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6906318395424,
            -79.2989833380474
        ],
        "neighborhood": 66,
        "phone": "(416) 397-2720"
    },
    {
        "id": 386,
        "name": "Walter Perry Junior Public School",
        "address": "45 Falmouth Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7334561275574,
            -79.2512456866976
        ],
        "neighborhood": 124
    },
    {
        "id": 387,
        "name": "Lanor Junior Middle School",
        "address": "450 Lanor Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6095014861413,
            -79.5447921850042
        ],
        "neighborhood": 20
    },
    {
        "id": 388,
        "name": "John A Leslie Public School",
        "address": "459 Midland Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7141086801971,
            -79.2490593761566
        ],
        "neighborhood": 123
    },
    {
        "id": 389,
        "name": "Clinton Street Junior Public School",
        "address": "460 Manning Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6576460735345,
            -79.4140575735688
        ],
        "neighborhood": 80,
        "phone": "(416) 393-9155"
    },
    {
        "id": 390,
        "name": "West Glen Junior School",
        "address": "47 Cowley Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6504713423926,
            -79.5608016240727
        ],
        "neighborhood": 13
    },
    {
        "id": 391,
        "name": "Wedgewood Junior School",
        "address": "5 Swan Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6453169519903,
            -79.5462529112722
        ],
        "neighborhood": 158
    },
    {
        "id": 392,
        "name": "John Polanyi Collegiate Institute",
        "address": "640 Lawrence Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7178089516362,
            -79.439855309525
        ],
        "neighborhood": 32,
        "phone": "(416) 395-3303"
    },
    {
        "id": 393,
        "name": "Claude Watson School for the Arts",
        "address": "130 Doris Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7657254741228,
            -79.4093736661307
        ],
        "neighborhood": 151
    },
    {
        "id": 394,
        "name": "Kimberley Junior Public School",
        "address": "50 Swanwick Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6826199722785,
            -79.2991278839731
        ],
        "neighborhood": 62,
        "phone": "(416) 393-1450"
    },
    {
        "id": 395,
        "name": "Beaches Alternative Junior School",
        "address": "50 Swanwick Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6826199722785,
            -79.2991278839731
        ],
        "neighborhood": 62,
        "phone": "(416) 393-1451"
    },
    {
        "id": 396,
        "name": "Frank Oke Secondary School",
        "address": "500 Alliance Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.677512419216,
            -79.4887542282147
        ],
        "neighborhood": 111,
        "phone": "(416) 394-3158"
    },
    {
        "id": 397,
        "name": "Lester B Pearson Elementary School",
        "address": "7 Snowcrest Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7923194425359,
            -79.3874623162842
        ],
        "neighborhood": 49,
        "phone": "(416) 395-2650"
    },
    {
        "id": 398,
        "name": "Bruce Public School",
        "address": "51 Larchmount Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6610358159785,
            -79.3333360558731
        ],
        "neighborhood": 65,
        "phone": "(416) 393-0670"
    },
    {
        "id": 399,
        "name": "Cosburn Middle School",
        "address": "520 Cosburn Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6940723030924,
            -79.3307746357026
        ],
        "neighborhood": 58
    },
    {
        "id": 400,
        "name": "Wilkinson Junior Public School",
        "address": "53 Donlands Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6820416289563,
            -79.3374832389852
        ],
        "neighborhood": 69,
        "phone": "(416) 393-9575"
    },
    {
        "id": 401,
        "name": "Sir Oliver Mowat Collegiate Institute",
        "address": "5400 Lawrence Ave E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7793019336713,
            -79.1422383222644
        ],
        "neighborhood": 133,
        "phone": "(416) 396-6802"
    },
    {
        "id": 402,
        "name": "Sir Adam Beck Junior School",
        "address": "544 Horner Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6017812323731,
            -79.5482756661428
        ],
        "neighborhood": 20
    },
    {
        "id": 403,
        "name": "Norway Junior Public School",
        "address": "390 Kingston Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.676279047019,
            -79.3066687042731
        ],
        "neighborhood": 64,
        "phone": "(416) 393-1700"
    },
    {
        "id": 404,
        "name": "Malvern Collegiate Institute",
        "address": "55 Malvern Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6829141496984,
            -79.2929363196488
        ],
        "neighborhood": 62,
        "phone": "(416) 393-1480"
    },
    {
        "id": 405,
        "name": "Earl Beatty Junior and Senior Public School",
        "address": "55 Woodington Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6860684583807,
            -79.3213456307331
        ],
        "neighborhood": 59,
        "phone": "(416) 393-9070"
    },
    {
        "id": 406,
        "name": "Northview Heights Secondary School",
        "address": "550 Finch Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7738827738809,
            -79.4461177069985
        ],
        "neighborhood": 35,
        "phone": "(416) 395-3290"
    },
    {
        "id": 407,
        "name": "Fairbank Memorial Community School",
        "address": "555 Harvie Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6917032417799,
            -79.4554057013447
        ],
        "neighborhood": 109
    },
    {
        "id": 408,
        "name": "R H McGregor Elementary School",
        "address": "555 Mortimer Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6899952579101,
            -79.3271357421257
        ],
        "neighborhood": 59
    },
    {
        "id": 409,
        "name": "Regent Heights Public School",
        "address": "555 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7070156248448,
            -79.2891326348503
        ],
        "neighborhood": 120
    },
    {
        "id": 410,
        "name": "Bala Avenue Community School",
        "address": "6 Bala Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6894622237887,
            -79.4990122716087
        ],
        "neighborhood": 115
    },
    {
        "id": 411,
        "name": "Humber Summit Middle School",
        "address": "60 Pearldale Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7505647535485,
            -79.564522188693
        ],
        "neighborhood": 21
    },
    {
        "id": 412,
        "name": "Donwood Park Public School",
        "address": "61 Dorcot Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7569783122163,
            -79.2623651149549
        ],
        "neighborhood": 156
    },
    {
        "id": 413,
        "name": "Taylor Creek Public School",
        "address": "644 Warden Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7000377584633,
            -79.2772877434307
        ],
        "neighborhood": 121
    },
    {
        "id": 414,
        "name": "Dewson Street Junior Public School",
        "address": "65 Concord Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.655675087264,
            -79.4240544310152
        ],
        "neighborhood": 83,
        "phone": "(416) 393-9120"
    },
    {
        "id": 415,
        "name": "Topcliff Public School",
        "address": "65 Topcliff Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7555851004459,
            -79.5106588918435
        ],
        "neighborhood": 25
    },
    {
        "id": 416,
        "name": "East York Collegiate Institute",
        "address": "650 Cosburn Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6949906148821,
            -79.3275764481259
        ],
        "neighborhood": 58
    },
    {
        "id": 417,
        "name": "East York Alternative Secondary School",
        "address": "670 Cosburn Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6949913553145,
            -79.3252956395229
        ],
        "neighborhood": 58
    },
    {
        "id": 418,
        "name": "George Syme Community School",
        "address": "69 Pritchard Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6692513829928,
            -79.491126770757
        ],
        "neighborhood": 89
    },
    {
        "id": 419,
        "name": "Drewry Secondary School",
        "address": "70 Drewry Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7869814732506,
            -79.421213687216
        ],
        "neighborhood": 36
    },
    {
        "id": 420,
        "name": "Cummer Valley Middle School",
        "address": "70 Maxome Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7882319564093,
            -79.4012761021226
        ],
        "neighborhood": 50
    },
    {
        "id": 421,
        "name": "North Toronto Collegiate Institute",
        "address": "17 Broadway Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7098067339604,
            -79.3966000753378
        ],
        "neighborhood": 173,
        "phone": "(416) 393-9180"
    },
    {
        "id": 422,
        "name": "Forest Hill Collegiate Institute",
        "address": "730 Eglinton Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7030582555106,
            -79.4213427841136
        ],
        "neighborhood": 102,
        "phone": "(416) 393-1860"
    },
    {
        "id": 423,
        "name": "Palmerston Avenue Junior Public School",
        "address": "734 Palmerston Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6681449064113,
            -79.4152049534391
        ],
        "neighborhood": 95,
        "phone": "(416) 393-9305"
    },
    {
        "id": 424,
        "name": "Parkdale Junior and Senior Public School",
        "address": "78 Seaforth Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6431872870807,
            -79.4367985750645
        ],
        "neighborhood": 84,
        "phone": "(416) 393-1280"
    },
    {
        "id": 425,
        "name": "Jackman Avenue Junior Public School",
        "address": "79 Jackman Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6806502154921,
            -79.3539353612732
        ],
        "neighborhood": 67,
        "phone": "(416) 393-9710"
    },
    {
        "id": 426,
        "name": "Charles G Fraser Junior Public School",
        "address": "79 Manning Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6485300830641,
            -79.4094836303214
        ],
        "neighborhood": 81,
        "phone": "(416) 393-1830"
    },
    {
        "id": 427,
        "name": "Oriole Park Junior Public School",
        "address": "80 Braemar Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7025715516779,
            -79.4096932774579
        ],
        "neighborhood": 101,
        "phone": "(416) 393-9215"
    },
    {
        "id": 428,
        "name": "Heritage Park Public School",
        "address": "80 Old Finch Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8213508850921,
            -79.207720158593
        ],
        "neighborhood": 144
    },
    {
        "id": 429,
        "name": "Heather Heights Junior Public School",
        "address": "80 Slan Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7751558784252,
            -79.2150687264433
        ],
        "neighborhood": 135
    },
    {
        "id": 430,
        "name": "Danforth Collegiate and Technical Institute",
        "address": "800 Greenwood Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6828387343202,
            -79.3340895606897
        ],
        "neighborhood": 59
    },
    {
        "id": 431,
        "name": "Bedford Park Public School",
        "address": "81 Ranleigh Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7277982581742,
            -79.4002783723743
        ],
        "neighborhood": 105,
        "phone": "(416) 393-9424"
    },
    {
        "id": 432,
        "name": "Frankland Community School",
        "address": "816 Logan Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6771506675787,
            -79.3496800848427
        ],
        "neighborhood": 67
    },
    {
        "id": 433,
        "name": "Cottingham Junior Public School",
        "address": "85 Birch Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6803794372321,
            -79.3956090079305
        ],
        "neighborhood": 97,
        "phone": "(416) 393-1895"
    },
    {
        "id": 434,
        "name": "John English Junior Middle School",
        "address": "95 Mimico Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6118557338467,
            -79.4944180034274
        ],
        "neighborhood": 160,
        "phone": "(416) 394-7660"
    },
    {
        "id": 435,
        "name": "Ryerson Community School",
        "address": "96 Denison Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6512817054496,
            -79.4023797268448
        ],
        "neighborhood": 78
    },
    {
        "id": 436,
        "name": "Keele Street Public School",
        "address": "99 Mountview Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6575074742763,
            -79.4615965745208
        ],
        "neighborhood": 88,
        "phone": "(416) 393-9035"
    },
    {
        "id": 437,
        "name": "Mountview Alternative Junior School",
        "address": "99 Mountview Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6575074742763,
            -79.4615965745208
        ],
        "neighborhood": 88
    },
    {
        "id": 438,
        "name": "Oakwood Collegiate Institute",
        "address": "991 St Clair Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6786558887327,
            -79.4363790055539
        ],
        "neighborhood": 92,
        "phone": "(416) 393-1780"
    },
    {
        "id": 439,
        "name": "Westwood Middle School",
        "address": "994 Carlaw Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6864953869061,
            -79.3509795618846
        ],
        "neighborhood": 57,
        "phone": "(416) 396-2480"
    },
    {
        "id": 440,
        "name": "Broadlands Public School",
        "address": "106 Broadlands Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7457277227854,
            -79.316462271329
        ],
        "neighborhood": 149
    },
    {
        "id": 441,
        "name": "Delphi Secondary Alternative School",
        "address": "109 Chartland Blvd S",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.799988726269,
            -79.2785043435939
        ],
        "neighborhood": 129
    },
    {
        "id": 442,
        "name": "Chartland Junior Public School",
        "address": "109 Chartland Blvd S",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.799988726269,
            -79.2785043435939
        ],
        "neighborhood": 129
    },
    {
        "id": 443,
        "name": "Pineway Public School",
        "address": "110 Pineway Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7964177776079,
            -79.3745155238261
        ],
        "neighborhood": 49
    },
    {
        "id": 444,
        "name": "Owen Public School",
        "address": "111 Owen Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7490561850855,
            -79.3925162004247
        ],
        "neighborhood": 40
    },
    {
        "id": 445,
        "name": "J B Tyrrell Senior Public School",
        "address": "10 Corinthian Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7888787686407,
            -79.3241750662902
        ],
        "neighborhood": 147
    },
    {
        "id": 446,
        "name": "David Lewis Public School",
        "address": "130 Fundy Bay Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8091967088078,
            -79.3178860611438
        ],
        "neighborhood": 116
    },
    {
        "id": 447,
        "name": "Valley Park Middle School",
        "address": "130 Overlea Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7104405907514,
            -79.3358705226236
        ],
        "neighborhood": 44
    },
    {
        "id": 448,
        "name": "Sir Samuel B Steele Junior Public School",
        "address": "131 Huntsmill Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8070663083017,
            -79.3275418257916
        ],
        "neighborhood": 116
    },
    {
        "id": 449,
        "name": "Marc Garneau Collegiate Institute",
        "address": "135 Overlea Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7089756853719,
            -79.3349679464078
        ],
        "neighborhood": 55,
        "phone": "(416) 396-2410"
    },
    {
        "id": 450,
        "name": "Macklin Public School",
        "address": "136 Ingleton Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.821788456337,
            -79.2674700420568
        ],
        "neighborhood": 130
    },
    {
        "id": 451,
        "name": "Summit Heights Public School",
        "address": "139 Armour Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7413217746515,
            -79.4300369383682
        ],
        "neighborhood": 33
    },
    {
        "id": 452,
        "name": "Sir Ernest MacMillan Senior Public School",
        "address": "149 Huntsmill Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8066383253939,
            -79.3286382346771
        ],
        "neighborhood": 116
    },
    {
        "id": 453,
        "name": "Ernest Public School",
        "address": "150 Cherokee Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.791415465113,
            -79.3373825688455
        ],
        "neighborhood": 46
    },
    {
        "id": 454,
        "name": "Brimwood Boulevard Junior Public School",
        "address": "151 Brimwood Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8116998848004,
            -79.2740896574429
        ],
        "neighborhood": 130
    },
    {
        "id": 455,
        "name": "Burrows Hall Junior Public School",
        "address": "151 Burrows Hall Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.792697960518,
            -79.2288180080604
        ],
        "neighborhood": 145
    },
    {
        "id": 456,
        "name": "Timberbank Junior Public School",
        "address": "170 Timberbank Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7914712561725,
            -79.307285388876
        ],
        "neighborhood": 148
    },
    {
        "id": 457,
        "name": "Chief Dan George Public School",
        "address": "185 Generation Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8027223090495,
            -79.1638346582217
        ],
        "neighborhood": 134
    },
    {
        "id": 458,
        "name": "Terry Fox Public School",
        "address": "185 Wintermute Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8158993563047,
            -79.3186862950221
        ],
        "neighborhood": 116
    },
    {
        "id": 459,
        "name": "Gracedale Public School",
        "address": "186 Gracedale Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.753197538015,
            -79.5618421120233
        ],
        "neighborhood": 21
    },
    {
        "id": 460,
        "name": "George Webster Elementary School",
        "address": "50 Chapman Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7010488988453,
            -79.299760623825
        ],
        "neighborhood": 61
    },
    {
        "id": 461,
        "name": "Anson S Taylor Junior Public School",
        "address": "20 Placentia Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8042919764275,
            -79.2615613356444
        ],
        "neighborhood": 129
    },
    {
        "id": 462,
        "name": "Danforth Gardens Public School",
        "address": "20 Santamonica Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7087670630065,
            -79.270927399778
        ],
        "neighborhood": 120
    },
    {
        "id": 463,
        "name": "Dr Norman Bethune Collegiate Institute",
        "address": "200 Fundy Bay Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8121621401057,
            -79.3194284089425
        ],
        "neighborhood": 116,
        "phone": "(416) 396-8200"
    },
    {
        "id": 464,
        "name": "Chester Le Junior Public School",
        "address": "201 Chester Le Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7985877098575,
            -79.3310953374039
        ],
        "neighborhood": 147
    },
    {
        "id": 465,
        "name": "Tam O'Shanter Junior Public School",
        "address": "21 King Henry's Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7850716358588,
            -79.2976616870896
        ],
        "neighborhood": 118
    },
    {
        "id": 466,
        "name": "Silver Springs Public School",
        "address": "222 Silver Springs Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8044295089524,
            -79.3023769660098
        ],
        "neighborhood": 148
    },
    {
        "id": 467,
        "name": "Brookmill Boulevard Junior Public School",
        "address": "25 Brookmill Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.80122038284,
            -79.3148680045935
        ],
        "neighborhood": 148
    },
    {
        "id": 468,
        "name": "Charles Gordon Senior Public School",
        "address": "25 Marcos Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7462850480666,
            -79.2605263117434
        ],
        "neighborhood": 157
    },
    {
        "id": 469,
        "name": "Iroquois Junior Public School",
        "address": "265 Chartland Blvd S",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8026801566349,
            -79.2694408055289
        ],
        "neighborhood": 129
    },
    {
        "id": 470,
        "name": "Gosford Public School",
        "address": "30 Gosford Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7643184871585,
            -79.5213241884271
        ],
        "neighborhood": 27
    },
    {
        "id": 471,
        "name": "Shaughnessy Public School",
        "address": "30 Shaughnessy Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7702840439533,
            -79.3516008694888
        ],
        "neighborhood": 53
    },
    {
        "id": 472,
        "name": "Twentieth Street Junior School",
        "address": "3190 Lake Shore Blvd W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.5979771530563,
            -79.5199382429952
        ],
        "neighborhood": 18
    },
    {
        "id": 473,
        "name": "Lamberton Public School",
        "address": "33 Lamberton Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7536543018276,
            -79.5028244891368
        ],
        "neighborhood": 25
    },
    {
        "id": 474,
        "name": "Pauline Johnson Junior Public School",
        "address": "35 Dunmurray Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7851298582651,
            -79.3035712981415
        ],
        "neighborhood": 118
    },
    {
        "id": 475,
        "name": "Percy Williams Junior Public School",
        "address": "35 White Heather Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8126668817723,
            -79.2656585281205
        ],
        "neighborhood": 129,
        "phone": "(416) 396-6515"
    },
    {
        "id": 476,
        "name": "Cherokee Public School",
        "address": "390 Cherokee Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7987627465793,
            -79.338614744436
        ],
        "neighborhood": 46
    },
    {
        "id": 477,
        "name": "Rockcliffe Middle School",
        "address": "400 Rockcliffe Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6738651424808,
            -79.4888938172078
        ],
        "neighborhood": 111
    },
    {
        "id": 478,
        "name": "Cassandra Public School",
        "address": "45 Cassandra Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7484250053493,
            -79.3289014753509
        ],
        "neighborhood": 149
    },
    {
        "id": 479,
        "name": "North Bridlewood Junior Public School",
        "address": "50 Collingsbrook Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.788916355463,
            -79.3185870835038
        ],
        "neighborhood": 147
    },
    {
        "id": 480,
        "name": "Denlow Public School",
        "address": "50 Denlow Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7458394934387,
            -79.3642277250946
        ],
        "neighborhood": 40,
        "phone": "(416) 395-2300"
    },
    {
        "id": 481,
        "name": "Gateway Public School",
        "address": "55 Gateway Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7117262234356,
            -79.3310091533195
        ],
        "neighborhood": 44
    },
    {
        "id": 482,
        "name": "Bridlewood Junior Public School",
        "address": "60 Bridlewood Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7807962711677,
            -79.3150953883817
        ],
        "neighborhood": 147
    },
    {
        "id": 483,
        "name": "Morrish Public School",
        "address": "61 Canmore Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7931879168947,
            -79.1792700314566
        ],
        "neighborhood": 134
    },
    {
        "id": 484,
        "name": "Beverly Glen Junior Public School",
        "address": "85 Beverly Glen Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7986530998679,
            -79.3230676298928
        ],
        "neighborhood": 147
    },
    {
        "id": 485,
        "name": "Charlottetown Junior Public School",
        "address": "85 Charlottetown Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7820702346732,
            -79.1422089559982
        ],
        "neighborhood": 143
    },
    {
        "id": 486,
        "name": "Alvin Curling Public School",
        "address": "50 Upper Rouge Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8084816562815,
            -79.1902392505261
        ],
        "neighborhood": 146
    },
    {
        "id": 487,
        "name": "Humberwood Downs Junior Middle Academy",
        "address": "850 Humberwood Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7288858667834,
            -79.6191818734033
        ],
        "neighborhood": 1
    },
    {
        "id": 488,
        "name": "Alexmuir Junior Public School",
        "address": "95 Alexmuir Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.809109322683,
            -79.2856134903058
        ],
        "neighborhood": 130
    },
    {
        "id": 489,
        "name": "Faywood Arts-Based Curriculum School",
        "address": "95 Faywood Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7398550354918,
            -79.4466973349755
        ],
        "neighborhood": 33
    },
    {
        "id": 490,
        "name": "Lucy Maud Montgomery Public School",
        "address": "95 Murison Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7969167927449,
            -79.2093657180027
        ],
        "neighborhood": 146
    },
    {
        "id": 491,
        "name": "Terraview-Willowfield Public School",
        "address": "95 Pachino Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7637829145381,
            -79.3085727444468
        ],
        "neighborhood": 119
    },
    {
        "id": 492,
        "name": "Agnes Macphail Public School",
        "address": "112 Goldhawk Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.819268975669,
            -79.2785533935458
        ],
        "neighborhood": 130
    },
    {
        "id": 493,
        "name": "Berner Trail Junior Public School",
        "address": "120 Berner Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8014341079073,
            -79.2211413058912
        ],
        "neighborhood": 146,
        "phone": "(416) 396-6050"
    },
    {
        "id": 494,
        "name": "Milliken Public School",
        "address": "130 Port Royal Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8165865457748,
            -79.2884969457851
        ],
        "neighborhood": 130
    },
    {
        "id": 495,
        "name": "Mary Shadd Public School",
        "address": "135 Hupfield Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8143956979563,
            -79.2183240428671
        ],
        "neighborhood": 144
    },
    {
        "id": 496,
        "name": "Highland Creek Public School",
        "address": "1410 Military Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7835009010173,
            -79.1784462927192
        ],
        "neighborhood": 134
    },
    {
        "id": 497,
        "name": "Grey Owl Junior Public School",
        "address": "150 Wickson Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8039892965967,
            -79.2133003232257
        ],
        "neighborhood": 146
    },
    {
        "id": 498,
        "name": "Joseph Howe Senior Public School",
        "address": "20 Winter Gardens Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.785807845353,
            -79.13729821037
        ],
        "neighborhood": 143
    },
    {
        "id": 499,
        "name": "Tom Longboat Junior Public School",
        "address": "37 Crow Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8104461724402,
            -79.2316269659623
        ],
        "neighborhood": 145
    },
    {
        "id": 500,
        "name": "Highcastle Public School",
        "address": "370 Military Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7867616021878,
            -79.2124956285055
        ],
        "neighborhood": 135
    },
    {
        "id": 501,
        "name": "Banting and Best Public School",
        "address": "380 Goldhawk Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8268714163484,
            -79.2798335039423
        ],
        "neighborhood": 130
    },
    {
        "id": 502,
        "name": "Port Royal Public School",
        "address": "408 Port Royal Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8246324049807,
            -79.2899667499679
        ],
        "neighborhood": 130
    },
    {
        "id": 503,
        "name": "Alexander Stirling Public School",
        "address": "70 Fawcett Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8116563251017,
            -79.2076059405385
        ],
        "neighborhood": 146
    },
    {
        "id": 504,
        "name": "Malvern Junior Public School",
        "address": "70 Mammoth Hall Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7978394610251,
            -79.2332519441342
        ],
        "neighborhood": 145,
        "phone": "(416) 396-6440"
    },
    {
        "id": 505,
        "name": "Military Trail Public School",
        "address": "701 Military Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7891154918287,
            -79.1971169704309
        ],
        "neighborhood": 135
    },
    {
        "id": 506,
        "name": "Emily Carr Public School",
        "address": "90 John Tabor Trl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8050223865269,
            -79.2069358552156
        ],
        "neighborhood": 146
    },
    {
        "id": 507,
        "name": "Greenholme Junior Middle School",
        "address": "10 Jamestown Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7350715355536,
            -79.582908112082
        ],
        "neighborhood": 2
    },
    {
        "id": 508,
        "name": "Portage Trail Community School",
        "address": "100 Sidney Belsey Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6922961842952,
            -79.5097668839041
        ],
        "neighborhood": 113
    },
    {
        "id": 509,
        "name": "Western Technical-Commercial School",
        "address": "125 Evelyn Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6570914920911,
            -79.4745815146538
        ],
        "neighborhood": 88
    },
    {
        "id": 510,
        "name": "THESTUDENTSCHOOL",
        "address": "160 Glendonwynne Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.657050103374,
            -79.4741378104814
        ],
        "neighborhood": 88
    },
    {
        "id": 511,
        "name": "General Brock Public School",
        "address": "140 Chestnut Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7185070990624,
            -79.2745902135289
        ],
        "neighborhood": 120
    },
    {
        "id": 512,
        "name": "Braeburn Junior School",
        "address": "15 Tandridge Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7280298273892,
            -79.5488638133372
        ],
        "neighborhood": 5
    },
    {
        "id": 513,
        "name": "Blythwood Junior Public School",
        "address": "2 Strathgowan Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7199314988808,
            -79.3895057084414
        ],
        "neighborhood": 173,
        "phone": "(416) 393-9105"
    },
    {
        "id": 514,
        "name": "Kennedy Public School",
        "address": "20 Elmfield Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8188359157905,
            -79.3081805175917
        ],
        "neighborhood": 116
    },
    {
        "id": 515,
        "name": "Thistletown Collegiate Institute",
        "address": "20 Fordwich Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7277265566382,
            -79.5624526489507
        ],
        "neighborhood": 4,
        "phone": "(416) 394-7710"
    },
    {
        "id": 516,
        "name": "Clairlea Public School",
        "address": "25 Rosalind Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7164767633036,
            -79.2962358879462
        ],
        "neighborhood": 120
    },
    {
        "id": 517,
        "name": "Firgrove Public School",
        "address": "270 Firgrove Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7520008914053,
            -79.519910862165
        ],
        "neighborhood": 25
    },
    {
        "id": 518,
        "name": "Indian Road Crescent Junior Public School",
        "address": "285 Indian Road Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6625287329027,
            -79.4600779001397
        ],
        "neighborhood": 90,
        "phone": "(416) 393-9025"
    },
    {
        "id": 519,
        "name": "North Bendale Junior Public School",
        "address": "29 Aveline Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7705721088236,
            -79.2478021030816
        ],
        "neighborhood": 142
    },
    {
        "id": 520,
        "name": "Anson Park Public School",
        "address": "30 Macduff Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7261289165667,
            -79.2411154201694
        ],
        "neighborhood": 123
    },
    {
        "id": 521,
        "name": "SATEC @ WA Porter Collegiate Institute",
        "address": "40 Fairfax Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7165934572119,
            -79.2872695164287
        ],
        "neighborhood": 120
    },
    {
        "id": 522,
        "name": "Blacksmith Public School",
        "address": "45 Blacksmith Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7711639591637,
            -79.5268106869839
        ],
        "neighborhood": 27
    },
    {
        "id": 523,
        "name": "Lambton Park Community School",
        "address": "50 Bernice Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6675759817237,
            -79.4983074871366
        ],
        "neighborhood": 24
    },
    {
        "id": 524,
        "name": "Glamorgan Junior Public School",
        "address": "51 Antrim Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7713003109162,
            -79.2895538318113
        ],
        "neighborhood": 118
    },
    {
        "id": 525,
        "name": "Ranchdale Public School",
        "address": "60 Ranchdale Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7524580000985,
            -79.3232914375889
        ],
        "neighborhood": 149
    },
    {
        "id": 526,
        "name": "St George's Junior School",
        "address": "70 Princess Anne Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6726005054962,
            -79.5417121934287
        ],
        "neighborhood": 10
    },
    {
        "id": 527,
        "name": "Sir Wilfrid Laurier Collegiate Institute",
        "address": "145 Guildwood Pkwy",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7470335031665,
            -79.1969914784391
        ],
        "neighborhood": 140,
        "phone": "(416) 396-6820"
    },
    {
        "id": 528,
        "name": "Joyce Public School",
        "address": "26 Joyce Pkwy",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7097753946106,
            -79.4637574882499
        ],
        "neighborhood": 31
    },
    {
        "id": 529,
        "name": "Jack Miner Senior Public School",
        "address": "405 Guildwood Pkwy",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.749688633648,
            -79.186968339472
        ],
        "neighborhood": 140
    },
    {
        "id": 530,
        "name": "Albert Campbell Collegiate Institute",
        "address": "1550 Sandhurst Crcl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8092625383141,
            -79.272424472942
        ],
        "neighborhood": 129,
        "phone": "(416) 396-6684"
    },
    {
        "id": 531,
        "name": "L'Amoreaux Collegiate Institute",
        "address": "2501 Bridletowne Crcl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.80291776814,
            -79.3180737471701
        ],
        "neighborhood": 148
    },
    {
        "id": 532,
        "name": "Park Lane Public School",
        "address": "60 Park Lane Crcl",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7289236202676,
            -79.3668200605055
        ],
        "neighborhood": 41
    },
    {
        "id": 533,
        "name": "The Waterfront School",
        "address": "635 Queens Quay W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6357488157646,
            -79.3971875912132
        ],
        "neighborhood": 165,
        "phone": "(416) 393-8500"
    },
    {
        "id": 534,
        "name": "City School",
        "address": "635 Queens Quay W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6357488157646,
            -79.3971875912132
        ],
        "neighborhood": 165,
        "phone": "(416) 393-1470"
    },
    {
        "id": 535,
        "name": "Bayview Middle School",
        "address": "25 Bunty Lane",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7762622265316,
            -79.3852946788356
        ],
        "neighborhood": 52
    },
    {
        "id": 536,
        "name": "Don Mills Collegiate Institute",
        "address": "15 The Donway E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7359592881657,
            -79.339277147401
        ],
        "neighborhood": 42
    },
    {
        "id": 537,
        "name": "Don Mills Middle School",
        "address": "17 The Donway E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7363797020937,
            -79.3397470950251
        ],
        "neighborhood": 42
    },
    {
        "id": 538,
        "name": "Market Lane Junior and Senior Public School",
        "address": "246 The Esplanade",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6498503802646,
            -79.3647413959783
        ],
        "neighborhood": 73,
        "phone": "(416) 393-1300"
    },
    {
        "id": 539,
        "name": "Yorkwoods Public School",
        "address": "25 Yorkwoods Gt",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7506598381465,
            -79.5138847463308
        ],
        "neighborhood": 25
    },
    {
        "id": 540,
        "name": "Dr Marion Hilliard Senior Public School",
        "address": "280 Washburn Way",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8036860800068,
            -79.2248218322885
        ],
        "neighborhood": 145
    },
    {
        "id": 541,
        "name": "Dixon Grove Junior Middle School",
        "address": "315 The Westway",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6850065948201,
            -79.5559776877569
        ],
        "neighborhood": 7
    },
    {
        "id": 542,
        "name": "Highland Heights Junior Public School",
        "address": "35 Glendower Crct",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7944199052402,
            -79.3002623454523
        ],
        "neighborhood": 148
    },
    {
        "id": 543,
        "name": "Kipling Collegiate Institute",
        "address": "380 The Westway",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.685288122965,
            -79.5623537178777
        ],
        "neighborhood": 7
    },
    {
        "id": 544,
        "name": "Crescent Town Elementary School",
        "address": "4 Massey Sq",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6968367454986,
            -79.2924665101008
        ],
        "neighborhood": 61
    },
    {
        "id": 545,
        "name": "Lawrence Heights Middle School",
        "address": "50 Highland Hill",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7208322543823,
            -79.4510772508882
        ],
        "neighborhood": 32
    },
    {
        "id": 546,
        "name": "Cornell Junior Public School",
        "address": "61 Holmfirth Ter",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7593925779675,
            -79.2180382189696
        ],
        "neighborhood": 141
    },
    {
        "id": 547,
        "name": "Poplar Road Junior Public School",
        "address": "66 Dearham Wood",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7537306281654,
            -79.1872408418527
        ],
        "neighborhood": 140
    },
    {
        "id": 548,
        "name": "Givins/Shaw Junior Public School",
        "address": "49 Givins St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6464076573477,
            -79.4175842923766
        ],
        "neighborhood": 81,
        "phone": "(416) 393-1240"
    },
    {
        "id": 549,
        "name": "Island Public/Natural Science School",
        "address": "30 Centre Island Pk",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6157002778621,
            -79.3783881351182
        ],
        "neighborhood": 166,
        "phone": "(416) 393-1910"
    },
    {
        "id": 550,
        "name": "SEED Alternative School",
        "address": "885 Dundas St E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6622721119517,
            -79.3503749917097
        ],
        "neighborhood": 72,
        "phone": "(416) 393-0564"
    },
    {
        "id": 551,
        "name": "Native Learning Centre",
        "address": "83 Alexander St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6636084257427,
            -79.3791781653545
        ],
        "neighborhood": 167,
        "phone": "(416) 969-8510"
    },
    {
        "id": 552,
        "name": "Avondale Public School",
        "address": "171 Avondale Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7596784143197,
            -79.4000020943236
        ],
        "neighborhood": 153
    },
    {
        "id": 553,
        "name": "Burnhamthorpe Collegiate Institute",
        "address": "500 The East Mall",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6491679256634,
            -79.5616948758766
        ],
        "neighborhood": 13
    },
    {
        "id": 554,
        "name": "CALC Secondary School",
        "address": "1 Danforth Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.674910857793,
            -79.3600575652384
        ],
        "neighborhood": 71,
        "phone": "(416) 393-9740"
    },
    {
        "id": 555,
        "name": "Scarborough Centre for Alternative Studies",
        "address": "720 Midland Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7283605174473,
            -79.2565866863318
        ],
        "neighborhood": 124
    },
    {
        "id": 556,
        "name": "Caring and Safe School LC4",
        "address": "540 Jones Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6772533084015,
            -79.3395605756216
        ],
        "neighborhood": 69
    },
    {
        "id": 557,
        "name": "Caring and Safe School LC2",
        "address": "1641 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7673772800379,
            -79.313002607885
        ],
        "neighborhood": 119
    },
    {
        "id": 558,
        "name": "North West Year Round Alternative Centre",
        "address": "425 Patricia Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.784556440757,
            -79.4411616324684
        ],
        "neighborhood": 36
    },
    {
        "id": 559,
        "name": "Yorkdale Secondary School",
        "address": "38 Orfus Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7201620650265,
            -79.4597250980034
        ],
        "neighborhood": 32,
        "phone": "(416) 395-3350"
    },
    {
        "id": 560,
        "name": "Thomas L Wells Public School",
        "address": "69 Nightstar Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8242998088678,
            -79.2261254163676
        ],
        "neighborhood": 144
    },
    {
        "id": 561,
        "name": "Etobicoke Year Round Alternative Centre",
        "address": "160 Silverhill Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6338578460427,
            -79.551276113705
        ],
        "neighborhood": 159
    },
    {
        "id": 562,
        "name": "South East Year Round Alternative Centre",
        "address": "720 Midland Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7283605174473,
            -79.2565866863318
        ],
        "neighborhood": 124
    },
    {
        "id": 563,
        "name": "North East Year Round Alternative Centre",
        "address": "2900 Don Mills Rd E",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7824288154923,
            -79.349385410988
        ],
        "neighborhood": 47
    },
    {
        "id": 564,
        "name": "Brookside Public School",
        "address": "75 Oasis Blvd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.8303652064155,
            -79.2338532994675
        ],
        "neighborhood": 144
    },
    {
        "id": 565,
        "name": "ALPHA II Alternative School",
        "address": "1141 Bloor St W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.65924610796,
            -79.4367968963581
        ],
        "neighborhood": 172,
        "phone": "(416) 393-0501"
    },
    {
        "id": 566,
        "name": "Karen Kain School of the Arts",
        "address": "60 Berl Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6310527117539,
            -79.5001456127783
        ],
        "neighborhood": 16
    },
    {
        "id": 567,
        "name": "Africentric Alternative School",
        "address": "1430 Sheppard Ave W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7454243556118,
            -79.4882606578029
        ],
        "neighborhood": 25,
        "phone": "(416) 395-5251"
    },
    {
        "id": 568,
        "name": "da Vinci School",
        "address": "33 Robert St",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6589530395299,
            -79.401909850979
        ],
        "neighborhood": 79,
        "phone": "(416) 393-8204"
    },
    {
        "id": 569,
        "name": "The Grove Community School",
        "address": "108 Gladstone Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6460212506421,
            -79.4288472631571
        ],
        "neighborhood": 84,
        "phone": "(416) 393-9150"
    },
    {
        "id": 570,
        "name": "Equinox Holistic Alternative School",
        "address": "151 Hiawatha Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6738732738778,
            -79.3230764862029
        ],
        "neighborhood": 65,
        "phone": "(416) 393-8274"
    },
    {
        "id": 571,
        "name": "Caring and Safe School LC3",
        "address": "720 Midland Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7283605174473,
            -79.2565866863318
        ],
        "neighborhood": 124
    },
    {
        "id": 572,
        "name": "Parkview Alternative School",
        "address": "1641 Pharmacy Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7673772800379,
            -79.313002607885
        ],
        "neighborhood": 119
    },
    {
        "id": 573,
        "name": "Boys Leadership Academy",
        "address": "45 Golfdown Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.722227297768,
            -79.5521137885613
        ],
        "neighborhood": 5
    },
    {
        "id": 574,
        "name": "Jean Augustine Girls' Leadership Academy",
        "address": "35 Glendower Crct",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7944199052402,
            -79.3002623454523
        ],
        "neighborhood": 148
    },
    {
        "id": 575,
        "name": "Ben Heppner Vocal Music Academy",
        "address": "80 Slan Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7751558784252,
            -79.2150687264433
        ],
        "neighborhood": 135
    },
    {
        "id": 576,
        "name": "Downtown Vocal Music Academy of Toronto",
        "address": "96 Denison Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6512817054496,
            -79.4023797268448
        ],
        "neighborhood": 78,
        "phone": "(416) 393-1340"
    },
    {
        "id": 577,
        "name": "Native Learning Centre East",
        "address": "145 Guildwood Pkwy",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7470335031665,
            -79.1969914784391
        ],
        "neighborhood": 140
    },
    {
        "id": 578,
        "name": "Fraser Mustard Early Learning Academy",
        "address": "82 Thorncliffe Park Dr",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7055777504935,
            -79.3435512383368
        ],
        "neighborhood": 55,
        "phone": "(416) 396-3050"
    },
    {
        "id": 579,
        "name": "Caring and Safe School LC1",
        "address": "30 Barrhead Cres",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7193132274678,
            -79.5665521913805
        ],
        "neighborhood": 4
    },
    {
        "id": 580,
        "name": "Emery EdVance Secondary",
        "address": "3395 Weston Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.7487227091093,
            -79.5395569845548
        ],
        "neighborhood": 22
    },
    {
        "id": 581,
        "name": "Oasis Alternative SS (Skateboard Factory) (Scadding Court)",
        "address": "707 Dundas St W",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6517857045587,
            -79.404893894284
        ],
        "neighborhood": 81
    },
    {
        "id": 582,
        "name": "Oasis Triangle Program",
        "address": "115 Simpson Ave",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6669210199121,
            -79.3478625108852
        ],
        "neighborhood": 68
    },
    {
        "id": 583,
        "name": "Norseman Junior Middle School- Castlebar",
        "address": "70 Chartwell Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6305564879895,
            -79.5137942125371
        ],
        "neighborhood": 16
    },
    {
        "id": 584,
        "name": "Davisville Junior Public School",
        "address": "529 Vaughan Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6910217034241,
            -79.436702828382
        ],
        "neighborhood": 107,
        "phone": "(416) 393-0570"
    },
    {
        "id": 585,
        "name": "Spectrum Alternative Senior School",
        "address": "529 Vaughan Rd",
        "type": "Public",
        "grades": "K-8",
        "location": [
            43.6910217034241,
            -79.436702828382
        ],
        "neighborhood": 107
    }
];
