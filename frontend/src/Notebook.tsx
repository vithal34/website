import React, { useState } from 'react';
import { animated, config, useSpring } from '@react-spring/three';
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
import { ThreeButton } from './ThreeButton';
import { useSceneController } from './SceneController';

export function Notebook({ ...groupProps }:GroupProps) {
  let time = 450;
  const linesVisible = useTrueAfterDelay(time += 1000);
  const fillVisible = useTrueAfterDelay(time += 500);
  const [honorsOpen, setHonorsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const { scene } = useSceneController();

  const breakpoints = useBreakpoints();

  const position:CoordArray = breakpoints.menu ? [4, 1.3, 2.5] : [-1.5, 3.8, 1.8];

  const { animatedRotation } = useSpring({
    animatedRotation: [0, 0, hovering ? Math.PI / 15 : 0],
    config: config.wobbly,
  });

  return (
    <>
      <animated.group
        {...groupProps}
        position={position}
        rotation={animatedRotation as any}
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

        {/* Make notebook clickable */}
        {linesVisible && (scene === 'menu' || scene === 'about') && (
          <ThreeButton
            position={[0, 0, 0.1]}
            width={1.8}
            height={1.8}
            description="Notebook with Honors & Awards"
            activationMsg="Opens a list of honors and awards"
            cursor="open-project"
            onClick={() => {
              setHonorsOpen(true);
            }}
            onFocus={() => { setHovering(true); }}
            onBlur={() => { setHovering(false); }}
            debug={false}
          />
        )}
      </animated.group>

      {/* Honors modal - rendered at root level outside the group */}
      {honorsOpen && (
        <Html
          position={breakpoints.menu ? [1, 0, 2] : [0, 0, 2]}
          className="w-[100vw] h-[100vh] relative font-light touch-auto pointer-events-auto"
          center
          style={{
            color: 'white',
            pointerEvents: 'auto',
          }}
        >
          <div
            className={`
              fixed inset-0 flex items-center justify-center
              ${breakpoints.about ? 'px-8' : 'px-4'}
            `}
            style={{ zIndex: 999998 }}
          >
            <div
              className={`
                relative bg-black/90 border-2 rounded-lg p-8
                max-h-[80vh] overflow-y-auto no-scrollbar
                ${breakpoints.about
                  ? 'max-w-[600px] w-full'
                  : 'max-w-[90vw] w-full'}
              `}
              style={{
                borderColor: colors.violet,
              }}
            >
              <button
                className={`
                  absolute top-2 right-2
                  font-mono text-4xl font-bold px-3 py-1
                  transition-colors rounded-full
                  cursor-pointer z-10
                `}
                style={{
                  color: colors.white,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: `2px solid ${colors.violet}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.violet;
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                  e.currentTarget.style.borderColor = colors.violet;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.white;
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.borderColor = colors.violet;
                }}
                onClick={() => { setHonorsOpen(false); }}
                type="button"
                aria-label="close honors"
              >
                ×
              </button>
              <div className="font-mono" style={{ color: colors.white }}>
                <h2 className="text-4xl font-bold mb-6" style={{ color: colors.violet }}>Honors & Awards</h2>
                <ul className="space-y-3 list-disc pl-6 text-lg leading-relaxed">
                  {honorsAndAwards.map((item) => (
                    <li key={item} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Html>
      )}
    </>
  );
}
