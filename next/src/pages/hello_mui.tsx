import { css } from '@emotion/react'
import { Button } from '@mui/material'
import type { NextPage } from 'next'

const buttonCss = css({
  padding: '24px',
})

const HelloMui: NextPage = () => {
  return (
    <>
      <Button variant="contained" css={buttonCss}>
        Button1
      </Button>
      <Button variant="outlined" css={buttonCss}>
        Button2
      </Button>
      <Button variant="contained" color="error" css={buttonCss}>
        Button3
      </Button>
    </>
  )
}

export default HelloMui
