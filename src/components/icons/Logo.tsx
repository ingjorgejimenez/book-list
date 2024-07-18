import React from 'react'

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  fill?: string
  height?: string
  width?: string
}

const Logo = ({
  className = '',
  width = '100',
  height,
  ...props
}: LogoProps) => {
  const heightCustom = height ?? parseFloat(width) * (23 / 20)
  return (
    <>
      <svg
        className={className}
        version='1.2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 319 366'
        width={width}
        height={heightCustom}
        {...props}
      >
        <title>Logo</title>
        <style>
          {`
        tspan { white-space: pre }
        .t0 { font-size: 29px; line-height: 27px; fill: #333333; font-weight: 700; font-family: "Inter","Arial", "sans-serif" }
        .t1 { font-size: 18px; fill: #333333; font-weight: 500;font-family: "Inter","Arial", "sans-serif"}
        .s2 { fill: #00bbe6 }
        .s3 { fill: #fc7c00 }
        .s4 { fill: #ffffff }
        .s5 { fill: #283f9b }
        .s6 { fill: #10183d }
        .s7 { fill: #24388e }
        .s8 { fill: #212f80 }
        @media (prefers-color-scheme: dark) {
          .t0 { fill: #ffffff; }
          .t1 { fill: #ffffff; }
        }
      `}
        </style>
        <g id='BACKGROUND'></g>
        <g id='OBJECTS'>
          <g id='&lt;Group&gt;'>
            <g id='&lt;Group&gt;'>
              <text
                id='The Books'
                style={{ transform: 'matrix(2,0,0,2,-279.634,-105.322)' }}
              >
                <tspan x='-63.5' y='0' className='t0'>
                  The Books
                </tspan>
              </text>
              <text
                id='TAGLINE HERE
'
                style={{ transform: 'matrix(2,0,0,2,-282.324,-76.205)' }}
              >
                <tspan
                  x='-46.1'
                  y='0'
                  className='t1'
                  dx='0 3 3 3 3 3 3 3 3 3 3 3 3'
                >
                  TAGLINE HERE
                </tspan>
              </text>
            </g>
            <g id='&lt;Group&gt;'>
              <g id='&lt;Group&gt;'>
                <path
                  id='&lt;Path&gt;'
                  className='s2'
                  d='m-344.1-184.1l81.3-58.7v-208.6c0-4.1-5-6.3-8-3.4l-73.3 69.3z'
                />
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s3'
                    d='m-337.9-367.8l76-71.8 54.6 11.6-76 71.9z'
                  />
                  <path
                    id='&lt;Compound Path&gt;'
                    fillRule='evenodd'
                    className='s4'
                    d='m-201.1-429.7l-81.3 76.8-61.7-13.2 81.3-76.8zm-130.6 60.2l47.5 10.1 70.7-66.8-47.5-10.2z'
                  />
                </g>
                <path
                  id='&lt;Path&gt;'
                  className='s5'
                  d='m-282.4-170.9l-61.7-13.2v-201.4l61.7 13.2z'
                />
                <path
                  id='&lt;Path&gt;'
                  className='s2'
                  d='m-201.1-438.2c0-4.1-5-6.3-8-3.4l-52.4 49.6-20.9 19.7v201.4l23.5-22.3 45.7-43.1 10.1-9.6c1.3-1.2 2-2.9 2-4.6v-117.5z'
                />
                <g id='&lt;Group&gt;'>
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s3'
                      d='m-321.1-383.6l59.2-56 37.8 8-59.2 56z'
                    />
                    <path
                      id='&lt;Compound Path&gt;'
                      fillRule='evenodd'
                      className='s4'
                      d='m-217.9-433.3l-43.6 41.3-20.9 19.7-44.9-9.6 64.5-61zm-97.1 47.9l30.7 6.6 18.6-17.6 35.4-33.4-30.7-6.6z'
                    />
                  </g>
                </g>
              </g>
              <g id='&lt;Group&gt;'>
                <path
                  id='&lt;Path&gt;'
                  className='s6'
                  d='m-218.9-297.1v66.1l-34.3 32.5v-69.6l17.1-33z'
                />
                <path
                  id='&lt;Path&gt;'
                  className='s7'
                  d='m-218.9-231l-34.3 32.5v-9.2l28.6-26.7z'
                />
                <path
                  id='&lt;Path&gt;'
                  className='s3'
                  d='m-226.5-299v66.4l7.6 1.6v-66.1z'
                />
              </g>
            </g>
          </g>
          <g id='&lt;Group&gt;'>
            <g id='&lt;Group&gt;'>
              <text
                id='The Books
'
                style={{ transform: 'matrix(2,0,0,2,160.961,-105.322)' }}
              >
                <tspan x='-63.5' y='0' className='t0'>
                  The Books
                </tspan>
              </text>
              <text
                id='TAGLINE HERE
'
                style={{ transform: 'matrix(2,0,0,2,158.272,-76.205)' }}
              >
                <tspan
                  x='-46.1'
                  y='0'
                  className='t1'
                  dx='0 3 3 3 3 3 3 3 3 3 3 3 3'
                >
                  TAGLINE HERE
                </tspan>
              </text>
            </g>
            <g id='&lt;Group&gt;'>
              <path
                id='&lt;Path&gt;'
                className='s2'
                d='m280.3-179.9h-238.7v-191.2c0-17.8 14.5-32.3 32.3-32.3h174.1c17.9 0 32.3 14.5 32.3 32.3z'
              />
              <g id='&lt;Group&gt;'>
                <path
                  id='&lt;Path&gt;'
                  className='s3'
                  d='m280.3-179.9h-64.6v-191.2c0-17.8 14.5-32.3 32.3-32.3 17.9 0 32.3 14.5 32.3 32.3z'
                />
              </g>
              <g id='&lt;Group&gt;'>
                <path
                  id='&lt;Path&gt;'
                  className='s8'
                  d='m223.8-179.9v-191.2c0-13.3 10.8-24.2 24.2-24.2 13.4 0 24.3 10.9 24.3 24.2v191.2z'
                />
              </g>
              <path
                id='&lt;Path&gt;'
                className='s7'
                d='m223.8-179.9v-191.2c0-13.3 10.8-24.2 24.2-24.2 13.4 0 24.3 10.9 24.3 24.2v191.2z'
              />
              <g id='&lt;Group&gt;'>
                <path
                  id='&lt;Path&gt;'
                  className='s7'
                  d='m163.8-327.7v116.5h-73.2v-116.5z'
                />
                <path
                  id='&lt;Path&gt;'
                  className='s6'
                  d='m163.8-327.7v116.5h-55.5v-116.5z'
                />
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s4'
                    d='m62.3-301.9h73.1l28.4-25.8h-73.2z'
                  />
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s3'
                      d='m86.6-301.9h24.4l28.4-25.8h-24.4z'
                    />
                  </g>
                  <path
                    id='&lt;Path&gt;'
                    className='s4'
                    d='m111-301.9h24.4l28.4-25.8h-24.4z'
                  />
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s3'
                      d='m135.4-301.9h28.4v-25.8z'
                    />
                  </g>
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s3'
                      d='m123.2-273.4c6.8 0 12.2-5.5 12.2-12.2v-16.3h-24.4v16.3c0 6.7 5.5 12.2 12.2 12.2z'
                    />
                  </g>
                  <path
                    id='&lt;Path&gt;'
                    className='s4'
                    d='m98.8-273.4c6.8 0 12.2-5.5 12.2-12.2v-16.3h-24.4v16.3c0 6.7 5.5 12.2 12.2 12.2z'
                  />
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s3'
                      d='m74.5-273.4c6.7 0 12.1-5.5 12.1-12.2v-16.3h-24.3v16.3c0 6.7 5.4 12.2 12.2 12.2z'
                    />
                  </g>
                </g>
              </g>
              <g id='&lt;Group&gt;'>
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s4'
                    d='m234.6-179.9h-1.2v-197.2c0-0.3 0.3-0.6 0.6-0.6 0.3 0 0.6 0.3 0.6 0.6z'
                  />
                </g>
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s4'
                    d='m244.7-179.9h-1.2v-201.1c0-0.3 0.3-0.6 0.6-0.6 0.3 0 0.6 0.3 0.6 0.6z'
                  />
                </g>
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s4'
                    d='m254.8-179.9h-1.2v-201.1c0-0.3 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6z'
                  />
                </g>
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s4'
                    d='m264.9-179.9h-1.2v-197.2c0-0.3 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6z'
                  />
                </g>
              </g>
            </g>
          </g>
          <g id='&lt;Group&gt;'>
            <text
              id='The Books
'
              style={{ transform: 'matrix(2,0,0,2,-279.634,311.838)' }}
            >
              <tspan x='-63.5' y='0' className='t0'>
                The Books
              </tspan>
            </text>
            <text
              id='TAGLINE HERE
'
              style={{ transform: 'matrix(2,0,0,2,-282.324,340.955)' }}
            >
              <tspan
                x='-46.1'
                y='0'
                className='t1'
                dx='0 3 3 3 3 3 3 3 3 3 3 3 3'
              >
                TAGLINE HERE
              </tspan>
            </text>
            <g id='&lt;Group&gt;'>
              <g id='&lt;Group&gt;'>
                <g id='&lt;Group&gt;'>
                  <g id='&lt;Group&gt;'>
                    <g id='&lt;Group&gt;'>
                      <path
                        id='&lt;Path&gt;'
                        className='s2'
                        d='m-428.2 185.6l79.9-60.7 211.3 57c4.2 1.1 5.1 6.4 1.4 8.4l-88.7 50.3z'
                      />
                    </g>
                    <g id='&lt;Group&gt;'>
                      <g id='&lt;Group&gt;'>
                        <path
                          id='&lt;Path&gt;'
                          className='s3'
                          d='m-219.1 180.5l71.9-40.7-1.4 38-71.9 40.8z'
                        />
                        <path
                          id='&lt;Compound Path&gt;'
                          fillRule='evenodd'
                          className='s4'
                          d='m-145.6 179.6l-78.1 44.2 1.7-45 78-44.3zm-70.5 2.7l-1.2 31 65.9-37.3 1.1-31z'
                        />
                      </g>
                    </g>
                    <path
                      id='&lt;Path&gt;'
                      className='s5'
                      d='m-426 123.7l-2.2 61.9 203.9 55 2.3-61.8z'
                    />
                    <g id='&lt;Group&gt;'>
                      <path
                        id='&lt;Path&gt;'
                        className='s2'
                        d='m-134.8 120c4.2 1.1 5.1 6.4 1.5 8.5l-88.7 50.3v-0.1 0.1l-204-55.1 94.1-53.3c3.1-1.9 5.4-2.3 9-1.2z'
                      />
                    </g>
                  </g>
                </g>
                <path
                  id='&lt;Path&gt;'
                  className='s6'
                  d='m-203.4 125.2l-41.4 23.5-58.2-15.1h-0.1l-41.3-10.7 41.4-23.5z'
                />
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s3'
                    d='m-203.4 125.2l-99.6-25.8-0.3-57.7c0-1.7 1.6-3 3.3-2.6l94.4 24.4c1.1 0.3 1.9 1.4 1.9 2.5z'
                  />
                </g>
                <path
                  id='&lt;Path&gt;'
                  className='s4'
                  d='m-247.5 58.4l-49.1-12.7c-0.6-0.2-1.2 0.3-1.2 0.8l0.3 48c0 0.4 0.3 0.8 0.7 0.9l48.9 12.6c0.5 0.1 1.1-0.3 1.1-0.9v-47.9c0-0.4-0.3-0.7-0.7-0.8z'
                />
                <path
                  id='&lt;Path&gt;'
                  className='s4'
                  d='m-237.3 62.8c0 1.3-1.1 2.4-2.4 2.4-1.4 0-2.4-1.1-2.4-2.4 0-1.3 1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4z'
                />
              </g>
              <path
                id='&lt;Path&gt;'
                className='s5'
                d='m-203.4 125.2l-41.4 23.5-58.2-15.1v-34.2z'
              />
            </g>
          </g>
          <g id='&lt;Group&gt;'>
            <g id='&lt;Group&gt;'>
              <text
                id='Books List'
                style={{ transform: 'matrix(2,0,0,2,158.208,310.447)' }}
              >
                <tspan x='-62.6' y='0' className='t0'>
                  Books
                </tspan>
                <tspan y='0' className='t0'>
                  {' '}
                </tspan>
                <tspan y='0' className='t0'>
                  L
                </tspan>
                <tspan y='0' className='t0'>
                  i
                </tspan>
                <tspan y='0' className='t0'>
                  s
                </tspan>
                <tspan y='0' className='t0'>
                  t
                </tspan>
                <tspan y='0' className='t0'></tspan>
              </text>
              <text
                id='JELOU'
                style={{ transform: 'matrix(2,0,0,2,140.272,344.955)' }}
              >
                <tspan x='-19.5' y='0' className='t1' dx='0'>
                  J
                </tspan>
                <tspan y='0' className='t1' dx='0'>
                  E
                </tspan>
                <tspan y='0' className='t1' dx='0'>
                  L
                </tspan>
                <tspan y='0' className='t1' dx='0'>
                  O
                </tspan>
                <tspan y='0' className='t1' dx='0 3'>
                  U
                </tspan>
              </text>
            </g>
            <g id='&lt;Group&gt;'>
              <g id='&lt;Group&gt;'>
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s2'
                    d='m311.6 152.1c0 6.7-1.8 13.2-5 19-3.1 5.7-7.7 10.6-13.5 14.2l-115 43.7-0.3 0.1-21.2 5.8h-146.2v-10.6h118.3v-63.1h-118.3v-10.5l112.8-37.7h149.3c5 0 9.9 1 14.3 2.7 14.5 5.7 24.8 19.8 24.8 36.4z'
                  />
                  <path
                    id='&lt;Path&gt;'
                    className='s6'
                    d='m191.9 123.3l-49 16.1h-49.7l48.9-16.1z'
                  />
                  <path
                    id='&lt;Path&gt;'
                    className='s5'
                    d='m311.6 152.1c0 6.7-1.8 13.3-5 19-3.1 5.7-7.7 10.6-13.5 14.2l-32.3 12.3-43.7 16.6-39 14.8-0.3 0.1c-6.3 3.7-13.5 5.8-21.2 5.8h-36l-2.6-49.3 42.3-34.6 112.2-38 14.3 2.7c14.5 5.7 24.8 19.9 24.8 36.4z'
                  />
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s8'
                      d='m30.9 161.2h125.7c17.4 0 31.6 14.1 31.6 31.6 0 17.4-14.2 31.5-31.6 31.5h-125.7z'
                    />
                  </g>
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s3'
                      d='m156.6 150.7h-146.2v10.5h103.6c17.4 0 31.6 14.1 31.6 31.6 0 17.4-14.2 31.5-31.6 31.5h-103.6v10.6h146.2c7.7 0 14.9-2.1 21.2-5.8 3.1-1.8 6-4 8.5-6.6 7.7-7.6 12.4-18.1 12.4-29.7 0-23.3-18.9-42.1-42.1-42.1z'
                    />
                  </g>
                  <path
                    id='&lt;Path&gt;'
                    className='s5'
                    d='m24.7 161.2h131.9c17.4 0 31.6 14.1 31.6 31.6 0 17.4-14.2 31.5-31.6 31.5h-131.9z'
                  />
                </g>
                <g id='&lt;Group&gt;'>
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s4'
                      d='m24.7 188.6v-0.9h149.8c0.2 0 0.4 0.2 0.4 0.4 0 0.3-0.2 0.5-0.4 0.5z'
                    />
                  </g>
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s4'
                      d='m24.7 201.4v-0.9h149.2c0.2 0 0.4 0.2 0.4 0.5 0 0.2-0.2 0.4-0.4 0.4z'
                    />
                  </g>
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s4'
                      d='m24.7 214.2v-0.8h137.1c0.2 0 0.4 0.2 0.4 0.4 0 0.2-0.2 0.4-0.4 0.4z'
                    />
                  </g>
                  <g id='&lt;Group&gt;'>
                    <path
                      id='&lt;Path&gt;'
                      className='s4'
                      d='m24.7 175.7v-0.8h137.1c0.2 0 0.4 0.2 0.4 0.4 0 0.2-0.2 0.4-0.4 0.4z'
                    />
                  </g>
                </g>
              </g>
              <path
                id='&lt;Path&gt;'
                className='s5'
                d='m142.1 123.3v16.1h-48.9z'
              />
              <g id='&lt;Group&gt;'>
                <path
                  id='&lt;Path&gt;'
                  className='s5'
                  d='m142.5 125.9l-47.1-47.1 56.1-56c13-13 34-13 47 0 13 13 13 34 0 47z'
                />
                <g id='&lt;Group&gt;'>
                  <path
                    id='&lt;Path&gt;'
                    className='s3'
                    d='m88.5 67.7c-11.8-11.8-11.8-31 0-42.8 5.8-5.7 13.4-8.9 21.5-8.9 8.1 0 15.7 3.2 21.4 8.9l53.9 53.9-42.8 42.9z'
                  />
                  <path
                    id='&lt;Compound Path&gt;'
                    fillRule='evenodd'
                    className='s4'
                    d='m133.5 22.8l56.1 56-47.1 47.1-56.1-56.1c-13-13-13-34 0-47 6.5-6.5 15-9.8 23.6-9.8 8.5 0 17 3.3 23.5 9.8zm-42.8 4.2c-10.7 10.7-10.7 28 0 38.6l51.8 51.8 38.6-38.6-51.8-51.8c-5.2-5.1-12.1-8-19.3-8-7.3 0-14.2 2.9-19.3 8z'
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}

export default Logo
