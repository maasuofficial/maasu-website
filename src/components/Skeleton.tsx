import React, { createContext, FC, ReactNode } from 'react'

const { Provider, Consumer } = createContext(false)

type ProviderProps = {
  isLoading: boolean
  children: ReactNode
}

export const SkeletonProvider: FC<ProviderProps> = ({
  isLoading = false,
  children,
}) => <Provider value={isLoading}>{children}</Provider>

type ConsumerProps = {
  children?: ReactNode
  className?: string
  width?: string | number
  height?: string | number
}

export const SkeletonConsumer: FC<ConsumerProps> = ({
  children,
  className,
  width,
  height,
}) => (
  <Consumer>
    {(isLoading) =>
      isLoading ? (
        <Loader className={className} width={width} height={height} />
      ) : (
        children
      )
    }
  </Consumer>
)

type LoaderProps = {
  className?: string
  width?: string | number
  height?: string | number
}

const Loader: FC<LoaderProps> = ({ className, width, height }) => (
  <div className={`skeleton ${className}`} style={{ height, width }}></div>
)
