import { useState } from 'react'
import { Document, pdfjs } from 'react-pdf'

import {
  Certificate,
  CertificatePreview,
  CertificateWrapper,
  Container,
} from './styles'
import { Header } from '../../components/Header'

import certificado1 from '../../assets/discover_01.pdf'
import certificado2 from '../../assets/discover_02.pdf'
import certificado3 from '../../assets/go_stack.pdf'
import certificado4 from '../../assets/ignite_reactjs.pdf'
import certificado5 from '../../assets/danki-code.pdf'
import certificado6 from '../../assets/certificate.pdf'

// eslint-disable-next-line no-undef
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export function Home() {
  const [numPages, setNumPages] = useState(null)
  const certificates = [
    { title: 'Certificado 2', url: certificado2, show: true },
    { title: 'Certificado 1', url: certificado1, show: true },
    { title: 'Certificado 3', url: certificado3, show: true },
    { title: 'Certificado 4', url: certificado4, show: true },
    { title: 'Certificado 5', url: certificado5, show: true },
    { title: 'Certificado 6', url: certificado6, show: true },
  ]

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <>
      <Header />
      <Container>
        {certificates.map((certificate, index) => (
          <Certificate key={index} show={certificate.show}>
            <CertificateWrapper>
              <Document
                file={certificate.url}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <CertificatePreview
                  pageNumber={1}
                  canvasBackground="#f2f2f2"
                  canvasHeight="auto"
                />
              </Document>
            </CertificateWrapper>
          </Certificate>
        ))}
      </Container>
    </>
  )
}
