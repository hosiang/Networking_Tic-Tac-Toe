attribute vec4 vPosition;
attribute vec2 vTexCoord;
attribute vec4 vColor;

varying vec4 fColor;
varying vec2 fTexCoord;

uniform mat4 uMvpMatrix;

void main()
{
	fColor = vColor;
	fTexCoord = vTexCoord;
	gl_Position = uMvpMatrix * vPosition;
}
