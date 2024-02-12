import { Endpoint } from "./routes"
import axios from "axios"
import {useCallback} from 'react';
import {fetchAPI} from '@/7_shared/api/fetch-api';

export const useStrapiData = () => {

  const fetchData = async (endpoint, isMeta = false) => {
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      // const path = `/global?populate=*`;
      // const urlParamsObject = { 
        // sort: { createdAt: "desc" },
        // populate: {
          // navbar: {
          //   fields: ["links"]
          // }
          // cover: { fields: ["url"] },
          // category: { populate: "*" },
          // authorsBio: {
          //   populate: "*",
          // },
        // },
        // pagination: {
        //   start: start,
        //   limit: limit,
        // },
      // };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const fetchedData = await fetchAPI(endpoint, {}, options);
      if (isMeta && fetchedData?.meta) {
        return fetchedData.meta
      }
      if (!isMeta && fetchedData?.data) {
        return fetchedData.data
      }
      return fetchedData
    } catch (error) {
      console.error(error);
    }
  }

  const getData = async (endpoint) => {
    console.log('GETDATATATATAATATATA')
    const DATA = await fetchData(endpoint, false)
    console.log('GET DATA', DATA)
    return DATA
  }

  const getMeta = async (endpoint) => {
    return await fetchData(endpoint, true)
  }

  const getPageData = async (id) => {
    const data = await fetchData('http:localhost:1337/pages/' + id + '?filters=', true)
    return data.attributes
  }

  return {getData, getMeta, getPageData}
}

//     try {
//       const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//       const path = `/global?populate=*`;
//       const urlParamsObject = { 
//         sort: { createdAt: "desc" },
//         populate: {
//           cover: { fields: ["url"] },
//           category: { populate: "*" },
//           authorsBio: {
//             populate: "*",
//           },
//         },
//         pagination: {
//           start: start,
//           limit: limit,
//         },
//       };
//       const options = { headers: { Authorization: `Bearer ${token}` } };
//       const responseData = await fetchAPI(path, urlParamsObject, options);

//       console.log(responseData)

//       // if (start === 0) {
//       //   setData(responseData.data);
//       // } else {
//       //   setData((prevData: any[] ) => [...prevData, ...responseData.data]);
//       // }

//       // setMeta(responseData.meta);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       // setLoading(false);
//     }
//   }, []);