import { DOMParser } from 'xmldom'

interface ParsedData {
  title: string
  description: string
}

export interface RootObjectStatus {
  url: string
  content_type: string
  content_length: number
  http_code: number
  response_time: number
}

export interface RootObject {
  contents: string
  status: RootObjectStatus
}

const getXml = async (url: string): Promise<Document> => {
  const response = await fetch(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`)
  const xmlData: RootObject = await response.json()

  const parser = new DOMParser()
  return parser.parseFromString(xmlData.contents, 'text/xml')
}

const parseXmlItems = (xml: Document): ParsedData[] => {
  const items = xml.documentElement.getElementsByTagName('item')
  const parsedData: ParsedData[] = []

  for (let i = 0; i < items.length; i++) {
    const title = items[i].getElementsByTagName('title')[0].textContent ?? ''
    const description = items[i].getElementsByTagName('description')[0].textContent ?? ''

    parsedData.push({
      title,
      description
    })
  }

  return parsedData
}

const parseXmlFromUrl = async (url: string): Promise<ParsedData[]> => {
  const xml = await getXml(url)
  return parseXmlItems(xml)
}

export default parseXmlFromUrl
