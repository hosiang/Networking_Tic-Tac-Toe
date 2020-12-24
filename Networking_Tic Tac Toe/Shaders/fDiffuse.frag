#version 330 core
//precision mediump float;

in vec2 fTexCoord;

uniform sampler2D sampler2d;

out vec4 FragColor;

void main()
{
	vec4 color = texture2D(sampler2d, fTexCoord);

	FragColor = vec4(1.0f, 0.0f, 1.0f, 1.0f); // color;
}