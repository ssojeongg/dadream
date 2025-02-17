import { useEffect, useRef } from "react";
import markerImg from "/src/assets/img/marker.png"; // 이미지 import

const NaverMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (!window.naver) return;

      const centerPosition = new window.naver.maps.LatLng(36.300398, 127.351689);

      const map = new window.naver.maps.Map(mapRef.current, {
        center: centerPosition, // 지도 중심 좌표
        zoom: 14,
      });

      // 🔹 중앙 이미지 (커스텀 마커)
      new window.naver.maps.Marker({
        position: centerPosition, // 지도 중앙 위치
        map,
        icon: {
          url: markerImg, // 이미지 경로
          size: new window.naver.maps.Size(29, 42), // 원본 이미지 크기
          scaledSize: new window.naver.maps.Size(29, 42), // 크기 조정 (이미지가 잘리지 않게)
          origin: new window.naver.maps.Point(0, 0),
          anchor: new window.naver.maps.Point(14.5, 42), // 하단 중심을 기준점으로 설정
        },
      });
    };

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=` + import.meta.env.VITE_CLIENT_ID;
    script.async = true;
    script.onload = loadMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default NaverMap;
