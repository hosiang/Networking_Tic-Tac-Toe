#version 330 core
//precision mediump float;

in vec2 fTexCoord;
in vec4 fColor;

uniform vec4 uColor;
uniform sampler2D sampler2d;

out vec4 FragColor;

void main()
{
	vec4 colorTexture = texture2D(sampler2d, fTexCoord);

	vec4 colorCombine = colorTexture * uColor * fColor;
	//vec4 colorCombine = uColor * fColor;
	
	FragColor = colorCombine;
	
}