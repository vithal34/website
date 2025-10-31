import React from 'react';
import { animated, config } from '@react-spring/three';
import { Color } from 'three';
import { Text, Html } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import bookFillPoints from './lines/bookFill';
import bookLinesPoints from './lines/bookLines';
// import bookHighlightPoints from './lines/bookHighlight';
import { Scribble } from './Scribble';
import { CoordArray } from './CoordArray';
import { fontUrls } from './typography';
import { useTrueAfterDelay } from './useTrueAfterDelay';
import colors from './colors';
import { useBreakpoints } from './useBreakpoints';
import { honorsAndAwards } from './honors';

export function Notebook({ ...groupProps }:GroupProps) {
  let time = 450;
  const linesVisible = useTrueAfterDelay(time += 1000);
  const fillVisible = useTrueAfterDelay(time += 500);

  const breakpoints = useBreakpoints();

  const position:CoordArray = breakpoints.menu ? [4, 1.3, 2.5] : [-1.5, 3.8, 1.8];

  return (
    <animated.group
      {...groupProps}
      position={position}
    >
      <Scribble
        points={(bookFillPoints as CoordArray[])}
        size={1.5}
        position={[0.2, 0, -0.3]}
        lineWidth={0.5}
        color={new Color(colors.violet)}
        rotation={[Math.PI, 0, 0]}
        visible={fillVisible}
        drawSpringConfig={config.molasses}
        curved
        nPointsInCurve={100}
      />
      <Scribble
        points={(bookLinesPoints as CoordArray[])}
        size={1.5}
        position={[0, 0, 0]}
        lineWidth={0.015}
        color={new Color(colors.black)}
        rotation={[Math.PI, 0, 0]}
        visible={linesVisible}
        curved
        nPointsInCurve={700}
      />
      <Text
        position={[0, 0.25, 0.1]}
        rotation={[0, 0, 0]}
        color={colors.black}
        anchorX="center"
        anchorY="middle"
        fontSize={0.22}
        font={fontUrls.bryantBold}
        visible={linesVisible}
      >
        {['HONORS &', 'AWARDS'].join('\n')}
      </Text>

      {/* Temporarily disabled honors list to resolve SyntaxError */}
      {/* <Html position={[0, -0.35, 0.2]} transform>
        <div
          className="font-mono text-[10px] sm:text-[12px] leading-tight bg-white/90 text-blue border border-blue rounded p-2 w-[220px] sm:w-[260px] max-h=[160px] overflow-auto shadow"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="font-bold mb-1">Highlights</div>
          <ul className="list-disc pl-4 space-y-[2px]">
            {honorsAndAwards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Html> */}
    </animated.group>
  );
}
