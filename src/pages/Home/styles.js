import styled from 'styled-components'
import { Page } from 'react-pdf'

export const Container = styled.div`
  text-align: center;

  background: rgb(19, 74, 209);
  background: linear-gradient(
    90deg,
    rgba(19, 74, 209, 0.7203256302521008) 41%,
    rgba(43, 43, 162, 0.7791491596638656) 45%,
    rgba(50, 109, 190, 0.8547794117647058) 49%
  );
`

export const CertificateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Certificate = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: 20px;
`

export const CertificatePreview = styled(Page).attrs(() => ({
  excludeFrom: ['annotations'],
}))`
  .react-pdf__Page__textContent {
    display: none;
  }

  .react-pdf__Page__annotations.annotationLayer {
    display: none;
  }
`
