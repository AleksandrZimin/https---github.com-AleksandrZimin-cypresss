
    it.only('API Test', () => {
        // cy.visit('https://fstravel.com')                                     //Переход на сайт
        // cy.viewport(1980, 1250)                                              //Разрешение экрана
        
        // cy.get('.theme-submit > [data-v-81bfe444=""]')                       //Скрытие поп-апа
        //   .click()
    
        // cy.wait(1000)                                                        //Ожидание 1 секунду
    
        // cy.get(':nth-child(2) > .block > :nth-child(6) > .v-text-16')        //Переход из подвала
        //   .scrollIntoView()
        //   .should('be.visible')
        //   .click()
  
        // cy.request('https://fstravel.com/api/cart/order/6337109/332852')
        //       .then((response)=>{
        //               console.log(response);
        //       })
  
                        const requestParams = {
                          orderId: "6337109", 
                          passportSeries: "",
                          passportNumber: "432909"
                        };
  
                        const headersData = {
                          cookie:
                          'ipp_uid=1655491120345/bcGKS167DARIt6aW/lDzJwnHCI/4sU3NUDVAsEg==; ipp_key=v1655491120345/v33947245ba5adc7a72e273/mVXDvKQDfG5799pwXWdqxg==; _gcl_au=1.1.50878305.1655491121; _tm_lt_sid=1655491120906.217874; tmr_lvid=404718e78ebd1b336966b21424f1acd5; tmr_lvidTS=1655491121654; _ym_d=1655491122; _ym_uid=1655491122271134786; _ct=1700000000122132683; _ct_client_global_id=01adb035-cee8-5a2c-8389-447eb14e2888; flocktory-uuid=e527e586-1c9d-4de5-add8-f1b64af50c61-1; blueID=8778c1ed-ed1d-4800-923d-c9a0b64bca89; __ddg1_=IeQ48gzDlQ9ao0Oqhtot; uxs_uid=ee467560-f7e1-11ec-9019-bbee0d723aba; _tt_enable_cookie=1; _ttp=1cdd8bfe-7581-4c97-9750-c610a7f7aa9d; mindboxDeviceUUID=86d8b2b7-87ff-4080-924d-c1ac56d33af6; directCrm-session=%7B%22deviceGuid%22%3A%2286d8b2b7-87ff-4080-924d-c1ac56d33af6%22%7D; advcake_session_id=5653cc1c-d14d-b59a-fe9d-d2f30c3e1f3e; advcake_click_id=; fsMarketUserUuid=dd389e22-d65a-477a-841e-e3d22fec20ac; fsMarketBasketUuid=9b6c7894-1b2d-49f7-a4a6-f20173e68d3e; advcake_utm_webmaster=12194452873; advcake_utm_partner=Moskva_%257C_RSYa_%257C_Saiti_konkyrentov_%257C_Tyrciya_%257C_FS; advcake_track_url=https%3A%2F%2Ffstravel.com%2F%3FdepartureCityId%3D274286%26arrivalCountryId%3D18803%26hotelIds%3D%26minStartDate%3D2022-04-12%26maxStartDate%3D2022-04-25%26minNightsCount%3D5%26maxNightsCount%3D10%26adults%3D2%26children%3D%26searchLevel%3D%26isGeoInfoRequired%3Dfalse%26daysAfterTomorrow%3D3%26utm_campaign%3DMoskva_%257C_RSYa_%257C_Saiti_konkyrentov_%257C_Tyrciya_%257C_FS%26utm_content%3D12194452873%26utm_medium%3Dcpc%26utm_source%3Dyandex%26utm_term%3DST%253Acontext%257CS%253Ayandex.ru%257CAP%253Ano%257CPT%253Anone%257CP%253A0%257CDT%253Adesktop%257CRI%253A21624%257CRN%253A%25D0%25A9%25D0%25B5%25D1%2580%25D0%25B1%25D0%25B8%25D0%25BD%25D0%25BA%25D0%25B0%257CCI%253A74681284%257CGI%253A4922845764%257CPI%253A32556870%257CAI%253A12194452873%257CKW%253A%26_openstat%3DZGlyZWN0LnlhbmRleC5ydTs3NDY4MTI4NDsxMjE5NDQ1Mjg5Mzt5YW5kZXgucnU6Z3VhcmFudGVl%26yclid%3D4174406343575003389; advcake_track_id=99b86825-9b2f-3e8d-7380-daae87598d8b; _ga_69S20RSBSE=GS1.1.1659094755.4.1.1659095498.0; _gid=GA1.2.159706292.1659209231; cted=modId%3Dop885zi2%3Bclient_id%3D1478650421.1655491121%3Bya_client_id%3D1655491122271134786; _ym_isad=1; _ct_site_id=42831; _ym_visorc=b; _ct_ids=op885zi2%3A42831%3A200380363; _ct_session_id=200380363; _gat_UA-12089726-23=1; _gat_UA-12089726-20=1; _gat_UA-12089726-25=1; _ga_GJ17DPCPJY=GS1.1.1659218205.60.1.1659219826.0; _ga=GA1.2.1478650421.1655491121; tmr_detect=1%7C1659219826771; call_s=%3C!%3E%7B%22op885zi2%22%3A%5B1659221626%2C200380363%2C%7B%22241285%22%3A%22745570%22%7D%5D%2C%22d%22%3A2%7D%3C!%3E; XSRF-TOKEN=eyJpdiI6ImlxeDJrUTdBekduRkxUOG5QNHlXcUE9PSIsInZhbHVlIjoiYUdRWTdMRVI4VmwyQUxhS0xiUVJsRmdDeHphSXJYbHlFVGRXUFlJeU1GVHpPa0IwK1hDT2ZtQjN3Q0I1R2RNa2tneVFjOXd0TlM1YU9KaFpIeUY4cmN5TlB0VkppNzlqdlQ2eWZTQVZDcUVlcGpPMVFWZFdNbzNFTHZoNW5xbzgiLCJtYWMiOiIzM2UzZWY5YWYxMTE1MjkxYzY5MGZhNWQ0N2Q2ODYxMmZlMTM4MThiNTI1MjdmOGQ3YWQxZWFhMjEzYzZjNmMwIn0%3D; funsan_session=eyJpdiI6ImJwQ3RMc0hScHJrWTM3ekxQdFhCWHc9PSIsInZhbHVlIjoiTFl3TkE4T1pCKytuQ25XdEhFcVZHUkJuTFMwem1YMjlFREgrRUE1ZHAxKzFVSElRQVNVbHR2a280QTZzb2htZjNlZ0V4WlNMaWhUT0NwSlRPaDBnN1h0dnhWZ0J6QlJpMUpqMEdhRWZ5UDhjdHhEa09BM0lIUVVoVm96Uis1V2MiLCJtYWMiOiIxNGYxZDZlYzIyOTdhMWU3NGNjYTAzZGNiNzNmODA1ZjQ5MTYxNDBhODY2YWUwODY1OTNkYjVlZGE3Y2Y2Y2RiIn0%3D; tmr_reqNum=11033',
                          authority: 'fstravel.com',
                          accept: 'application/json, text/plain, */*',
                          accept_language: 'ru_RU',
                          referer: 'https://fstravel.com/statuscheck',
                          x_xsrf_token: 
                          'eyJpdiI6ImlxeDJrUTdBekduRkxUOG5QNHlXcUE9PSIsInZhbHVlIjoiYUdRWTdMRVI4VmwyQUxhS0xiUVJsRmdDeHphSXJYbHlFVGRXUFlJeU1GVHpPa0IwK1hDT2ZtQjN3Q0I1R2RNa2tneVFjOXd0TlM1YU9KaFpIeUY4cmN5TlB0VkppNzlqdlQ2eWZTQVZDcUVlcGpPMVFWZFdNbzNFTHZoNW5xbzgiLCJtYWMiOiIzM2UzZWY5YWYxMTE1MjkxYzY5MGZhNWQ0N2Q2ODYxMmZlMTM4MThiNTI1MjdmOGQ3YWQxZWFhMjEzYzZjNmMwIn0='
  
                         }
  
        cy.request({
                method:   'POST',
                url:      'https://fstravel.com/statuscheck?orderId=6337109&passportSeries=&passportNumber=432909',
                params:     requestParams,
                authorization: 'Inherit auth from parent',
                headers:  headersData,
            }).then((response) => {
                      console.log(response);
              })
  
      })
  