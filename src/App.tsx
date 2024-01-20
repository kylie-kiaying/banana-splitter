import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import homepage from "./components/HomePaymentOverview"
import RootLayout from "./components/RootLayout"
import trips from "./components/Trips"
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout page={homepage}  />}>
      </Route>
      <Route path="/trips" element={<RootLayout page={trips}  />}>
      </Route>
    </>
  )
)

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router}/>
  </ChakraProvider>
)
