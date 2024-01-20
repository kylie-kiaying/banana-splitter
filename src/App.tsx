import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import RootLayout from "./components/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route/>
    </Route>
  )
)

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router}/>
  </ChakraProvider>
)
