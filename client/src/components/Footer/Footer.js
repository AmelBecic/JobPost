import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    return (
    <Container>
      hey
    </Container>

    )




}
const ContentContainer = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 130px 15px 130px;
  @media (max-width: 1200px) {
    padding: 60px 70px 15px 70px;
  }
  @media (max-width: 1020px) {
    padding: 20px 40px 15px 40px;
  }
  @media (max-width: 960px) {
    padding: 30px 10px;
  }
`

const Container = styled.div`
  position: relative;
  background: #f8f9fa;
  width: 100%;
`
const FooterLogo = styled.img`
  width: 150px;
  height: 50px;
  margin-bottom: 193px;
  @media (max-width: 520px) {
    width: 100px;
    height: 40px;
    margin-bottom: 100px;
  }
`



const FooterItem = styled.a`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #737988 !important;
  margin-bottom: 8px;
  cursor: pointer;
  width: 120px;

  &:first-child {
    margin-top: 20px;
  }

  @media (max-width: 1200px) {
    width: auto;
  }
`

const FooterSectionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`

const SubFooter = styled.div`
  border-top: 1px solid rgba(142, 156, 184, 0.3);
  height: 30px;
  padding-top: 24px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const SubFooterImage = styled.img`
  height: 30px;
`

export default Footer;