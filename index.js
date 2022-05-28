const axios = require('axios')

const BASE_URL = 'https://gamefaqs.gamespot.com'
const browserHeaders = {
accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
'accept-encoding': 'gzip, deflate, br',
'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
'cache-control': 'max-age=0',
cookie: 'gf_dvi=ZjYyOTI1NjM1MDBiMzE0MDM0OWU3NzIxNWRhYzRhZjAwZGEwY2VmMWQ4NWM0NGVmN2JkMTQxNjkxMzI0NjI5MjU2MzU%3D; gf_geo2=MTc5LjM0LjU5LjIyOS83Ni83MjY%3D; fv20220529=1; spt=yes; AMCVS_3C66570E5FE1A4AB0A495FFC%40AdobeOrg=1; s_vnum=1656349499798%26vn%3D1; s_invisit=true; s_lv_undefined_s=First%20Visit; chsn_cnsnt=gamefaqs.gamespot.com%3AC0001%2CC0002%2CC0003%2CC0004%2CC0005; tglr_anon_id=4df2876f-3aaf-45db-aa1f-070a855a739d; tglr_sess_id=fbbca453-4545-4be8-abf4-0ac19d1096ea; tglr_ref=https://www.google.com/; tglr_req=https://gamefaqs.gamespot.com/; tglr_sess_count=1; tglr_tenant_id=src_1kYs5kGF0gH8ObQlZU8ldA7KFYZ; cohsn_xs_id=56db0f2f-e760-449d-960c-2dae7e15b69e; s_cc=true; AMCV_3C66570E5FE1A4AB0A495FFC%40AdobeOrg=1585540135%7CMCIDTS%7C19141%7CMCMID%7C43737945303608916683641478097620654746%7CMCAAMLH-1654362299%7C4%7CMCAAMB-1654362299%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1653764700s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.0; aam_uuid=39141241862001331324065119679357062530; prevPageType=platform_game_list; OptanonConsent=isIABGlobal=false&datestamp=Sat+May+28+2022+14%3A07%3A34+GMT-0300+(Hor%C3%A1rio+Padr%C3%A3o+de+Bras%C3%ADlia)&version=6.7.0&hosts=&consentId=1dd88e56-06e1-4ea3-a127-7ccebcf21f29&interactionCount=1&landingPath=NotLandingPage&groups=C0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&AwaitingReconsent=false&geolocation=BR%3BSP; OptanonAlertBoxClosed=2022-05-28T17:07:34.201Z; s_getNewRepeat=1653757654407-New; s_lv_undefined=1653757654408; utag_main=v_id:01810ba0d933002355448583349c05085001e07d00bd0$_sn:1$_se:10$_ss:0$_st:1653759454873$ses_id:1653757499701%3Bexp-session$_pn:5%3Bexp-session$vapi_domain:gamespot.com; RT="z=1&dm=gamefaqs.gamespot.com&si=a6983cc9-55cb-4eec-ac44-a3347e93da0e&ss=l3q4ik14&sl=5&tt=3lq&bcn=%2F%2F17de4c0e.akstat.io%2F&ul=o7o9"',
referer: 'https://gamefaqs.gamespot.com',
'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Opera GX";v="86"',
'sec-ch-ua-mobile': '?0',
'sec-ch-ua-platform': '"Windows"',
'sec-fetch-dest': 'document',
'sec-fetch-mode': 'navigate',
'sec-fetch-site': 'none',
'sec-fetch-user': '?1',
'upgrade-insecure-requests': '1',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.64',
}

const getPage = () => {

  const path = '/n64/category/999-all?page=0'
  const url = `${BASE_URL}${path}`
  const options = {
    headers: browserHeaders,
  }
  return axios.get(url, options).then((res) => res.data)
  // console.log('*** getPage:', url)
}

getPage().then(console.log).catch(console.error)
