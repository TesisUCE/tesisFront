'use client'

import  { useRef } from 'react'
import { motion } from 'framer-motion'
import { Book, FileText, Download } from 'lucide-react'
import NavBar from '../../components/navbar'
const sections = [
  { id: 'document-final', title: 'Recurso escrito', icon: FileText },
  { id: 'document-expo', title: 'Recurso de exposición', icon: FileText },
  { id: 'notebook-kaggle', title: 'Notebook de Kaggle', icon: FileText },
  { id: 'notebook-colab', title: 'Notebook de Colab', icon: FileText },
  { id: 'model-keras', title: 'Modelo en formato .keras', icon: Download },
  { id: 'model-h5', title: 'Modelo en formato .h5', icon: Download },
]

export default function ResourcesPage() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})


  return (
    <>    
    <NavBar></NavBar>
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recursos para el Proyecto de IA
        </motion.h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.nav
          className="lg:w-1/4 border-r border-gray-300 pr-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="sticky top-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Book className="mr-2" />
              Índice
            </h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 flex items-center`}
                  >
                    <section.icon className="mr-2 h-5 w-5" />
                    <span>{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
        <motion.div
          className="lg:w-3/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Descarga y consulta de recursos</h2>
          <p className="mb-8 text-lg">
            Aquí encontrarás los recursos relacionados con el entrenamiento y uso de nuestros modelos de IA.
          </p>

          <section ref={(el) => { sectionRefs.current['document-final'] = el; }} id="document-final" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2" />
              Recurso documental
            </h3>
            <p className="mb-4">Documento escrito sobre el proyecto:</p>
            <a
              href="/Archives/Documento_Final_G7.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Documentacion
            </a>
          </section>

    

          <section ref={(el) => { sectionRefs.current['notebook-kaggle'] = el; }} id="notebook-kaggle" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2" />
              Notebook de Kaggle
            </h3>
            <p className="mb-4">Consulta el notebook de Kaggle utilizado para el entrenamiento del modelo y manejo del dataset:</p>
            <a
              href="https://www.kaggle.com/code/antonyarguello/notebooke4253b80f2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ir al notebook de Kaggle
            </a>
          </section>

          <section ref={(el) => { sectionRefs.current['model-keras'] = el; }} id="model-keras" className="mb-12 scroll-mt-20">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Download className="mr-2" />
              Modelo en formato .keras
            </h3>
            <p className="mb-4">Descarga el modelo entrenado en formato .keras:</p>
            <a
              href="https://www.kaggle.com/models/antonyarguello/uvillas_effi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Descargar modelo .keras
            </a>
          </section>


        </motion.div>
      </div>
    </div>
    </>

  )
}