"use client"

import { useState, useEffect, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const archiveData = [
  {
    year: 2025,
    theme: "Panta rhei – alles fließt",
    description: "Unter dem Motto 'Panta rhei - alles fließt' lud das Musikfest Wannsee 2025\n" +
        "            dazu ein, die Kraft des Wandels und der Bewegung in Musik und Natur zu erleben –\n" +
        "            passend zum Herbstanfang, wenn sich die Natur spürbar verändert.\n" +
        "            Heraklit schrieb: 'Wir steigen in denselben Fluss und doch nicht in denselben,\n" +
        "            wir sind es und wir sind es nicht.\'n" +
        "            Wannsee, eingebettet zwischen weitläufigen Seen, sanften Ufern und den\n" +
        "            Strömungen der Havel, spiegelt diese Erkenntnis als ein Ort des Wandels und der\n" +
        "            Bewegung in besonderer Weise wider. Gerade in dieser Jahreszeit, wenn der Herbst\n" +
        "            Einzug hält, ist der Wandel der Natur besonders deutlich spürbar. Das\n" +
        "            Festivalprogramm griff verschiedene Aspekte von Wasser, Wellen, Fluss und\n" +
        "            Wandel sowohl musikalisch als auch inhaltlich auf und machte so hör- und fühlbar, wie\n" +
        "            Musik und Natur miteinander in Bewegung sind. In Wannsee treffen Natur und Kultur\n" +
        "            auf einzigartige Weise zusammen und schaffen eine Atmosphäre, die unsere\n" +
        "            Konzerte besonders macht.",
    images: [
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel1_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel2_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel3_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel4_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel5_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel6_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel7_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel8_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel9_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel10_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel11_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel12_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel13_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel14_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel15_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel16_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel17_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel18_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel19_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel20_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel21_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel22_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel23_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel24_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel25_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel26_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel27_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel28_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel29_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel30_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel31_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel32_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel33_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel34_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel35_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel36_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel37_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel38_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel39_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel40_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel41_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel42_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel43_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel44_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel45_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel46_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel47_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel48_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel49_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel50_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel51_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel52_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel53_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel54_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel55_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel56_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel57_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel58_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel59_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel60_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel61_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel62_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel63_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel64_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel65_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel66_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel67_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel68_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel69_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel70_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel71_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel72_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel73_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel74_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel75_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel76_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel77_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel78_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel79_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel80_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel81_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel82_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel83_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel84_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel85_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel86_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel87_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel88_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel89_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel90_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel91_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel92_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel93_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel94_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel95_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel96_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel97_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel98_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel99_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel100_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel101_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel102_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel103_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel104_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel105_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel106_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel107_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel108_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel109_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/01_Eroeffnungskonzert/Der_Wellen_Wechselspiel110_web.jpg", alt: "Eröffnungskonzert 2025 - Der Wellen Wechselspiel" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau1_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau2_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau3_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau4_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau5_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau6_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau7_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau8_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau9_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau10_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau11_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau12_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau13_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau14_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau15_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau16_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau17_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau18_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau19_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/02_Jeux_d_eau/Jeux_d_eau20_web.jpg", alt: "Jeux d'eau 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille1_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille2_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille3_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille4_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille5_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille6_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille7_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille8_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille9_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille10_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille11_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille12_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille13_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille14_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille15_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille16_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille17_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille18_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille19_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille20_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille21_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille22_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille23_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille24_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille25_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille26_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille27_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille28_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille29_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille30_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille31_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille32_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille33_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille34_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille35_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille36_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille37_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille38_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille39_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille40_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille41_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille42_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille43_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/03_Sturm_und_Stille/Sturm_und_Stille44_web.jpg", alt: "Sturm und Stille 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst1_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst2_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst3_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst4_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst5_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst6_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst7_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst8_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst9_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst10_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst11_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/04_Kantatengottesdienst/Kantatengottesdienst12_web.jpg", alt: "Kantatengottesdienst 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei1_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei2_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei3_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei4_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei5_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei6_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei7_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei8_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei9_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei10_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei11_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei12_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei13_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei14_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei15_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei16_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei17_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei18_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei19_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei20_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei21_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei22_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei23_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei24_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei25_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei26_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei27_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei28_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei29_web.jpg", alt: "Panta rhei 2025" },
      { src: "/archive/2025/05_Panta_rhei/Panta_rhei30_web.jpg", alt: "Panta rhei 2025" },
        ]
  },
  {
    year: 2024,
    theme: "Apropos Arkadien...",
    description: "2024 fand das Festival unter dem Motto Apropos Arkadien... statt.\n" +
        "\n" +
        "Arkadien, als mythologische Idylle, als das Land unserer Sehnsucht, in dem Menschen und Tiere im Einklang mit der Natur leben, hat Künstler seit jeher fasziniert. " +
        "Zu Beginn des 19. Jahrhunderts ließen die Preußischen Könige Friedrich Wilhelm III. und Friedrich Wilhelm IV. die Landschaft zwischen Potsdam und Berlin, " +
        "die von der Havel, den anliegenden Seen und Wäldern geprägt ist, in eine weitläufige Park- und Kulturlandschaft umgestalten, die bis heute als 'Preußisches Arkadien' bekannt ist.\n" +
        "\n" +
        "Arkadien als persönlicher Sehnsuchtsort hat auch für uns heutzutage nicht an Aktualität verloren. Wo könnten wir dem besser nachspüren als in Wannsee, " +
        "mitten im Herzen des preußischen Arkadiens?",
    images: [
    ]
  }
]

export default function Archive() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, yearIndex: number, imageIndex: number} | null>(null)

  // Get all images in a flat array for navigation
  const allImages = archiveData.flatMap((yearData, yearIndex) =>
    yearData.images.map((image, imageIndex) => ({...image, yearIndex, imageIndex}))
  )

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const currentIndex = allImages.findIndex(img =>
      img.yearIndex === selectedImage.yearIndex && img.imageIndex === selectedImage.imageIndex
    )

    if (currentIndex === -1) return

    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1
    }

    setSelectedImage(allImages[newIndex])
  }, [selectedImage, allImages])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return

      switch (e.key) {
        case 'Escape':
          setSelectedImage(null)
          break
        case 'ArrowLeft':
          navigateImage('prev')
          break
        case 'ArrowRight':
          navigateImage('next')
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, navigateImage])

  return (
    <main className="relative">
      <Navigation />
      <div className="min-h-screen water-bg">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display text-slate-800 dark:text-slate-200 mb-8 text-center">
              Archiv
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center mb-16 max-w-4xl mx-auto">
              Hier finden Sie vergangene Programme und Erinnerungen an die schönsten Momente
              des Musikfest Wannsee aus den vergangenen Jahren.
            </p>

            <div className="space-y-20">
              {archiveData.map((yearData, index) => (
                <div key={yearData.year} className="relative">
                  <div className="text-center mb-12">
                    <h2 className="text-xl md:text-3xl font-display text-slate-800 dark:text-slate-200 mb-8">
                      {yearData.year}: {yearData.theme}
                    </h2>
                  </div>

                  <div className="text-center mb-12">
                    <div className="prose prose-lg prose-slate dark:prose-invert max-w-4xl mx-auto">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {yearData.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                      {yearData.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="aspect-square relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
                          onClick={() => setSelectedImage({...image, yearIndex: index, imageIndex})}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {index < archiveData.length - 1 && (
                    <div className="mt-20 flex justify-center">
                      <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Full-screen image overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[70] bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors flex items-center justify-center"
            style={{ width: '56px', height: '56px' }}
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[70] bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors flex items-center justify-center"
            style={{ width: '56px', height: '56px' }}
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[70] bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors flex items-center justify-center"
            style={{ width: '56px', height: '56px' }}
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={0}
              height={0}
              sizes="95vw"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  )
}